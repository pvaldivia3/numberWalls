import React, {useState, useEffect, Component} from "react";
import ColorBox from "./ColorBox";
import "./styles/Form.css";
import Page from "./Page";
import { det } from 'mathjs'
import { CropPortrait } from "@material-ui/icons";
import { orange, yellow } from "@material-ui/core/colors";
var bigDecimal = require('js-big-decimal');
/* global BigInt */

class Form extends Component {

    // myData = []

    constructor(props) {
        super(props);
        this.state = {fulllist: "", listNums:[], myData:[]};
        this.handleChange = this.handleChange.bind(this);        
    }

    calcCrossOneZero(theWall, pos1, pos2) {

        var oneCrossNumerator = new bigDecimal(BigInt(-theWall[pos1-4][pos2])*BigInt(theWall[pos1-1][pos2])*BigInt(theWall[pos1-1][pos2])+BigInt(theWall[pos1-2][pos2-2])*BigInt(theWall[pos1-2][pos2+1])*BigInt(theWall[pos1-2][pos2+1])+BigInt(theWall[pos1-2][pos2-1])*BigInt(theWall[pos1-2][pos2-1])*BigInt(theWall[pos1-2][pos2+2]));
        var oneCrossDenominator = new bigDecimal(BigInt(theWall[pos1-3][pos2])*BigInt(theWall[pos1-3][pos2]))
        var ans = oneCrossNumerator.divide(oneCrossDenominator);
        var ans2 = ans.round();
        console.log("Calculating Cross One Zero", ans.getValue())
        var ans3 = parseFloat(ans2.getValue());
        var ans4 = Math.round(ans3);
        return ans4;
    }

    calcCross(theWall, pos1, pos2) {
        console.log("Called calc cross")
        console.log(theWall)
        console.log(pos1, pos2)

        if (theWall[pos1-2][pos2]==BigInt(0)) {
            return this.calcCrossOneZero(theWall, pos1, pos2)
        }
        else {
            var crossNumerator = new bigDecimal(BigInt(BigInt(theWall[pos1-1][pos2])*BigInt(theWall[pos1-1][pos2])-BigInt(theWall[pos1-1][pos2-1])*BigInt(theWall[pos1-1][pos2+1])));
            var crossDenominator = new bigDecimal(BigInt((theWall[pos1-2][pos2])));
            console.log("CrossNumer", crossNumerator.getValue())
            console.log("CrossDenom", crossDenominator.getValue())
            var ans = (crossNumerator.divide(crossDenominator));
            console.log("Calculating Cross No Zeros", ans.getValue())
            var ans2 = ans.round();
            var ans3 = BigInt(ans2.getValue());
            return ans3;
        }
    }

    determineZeroSquareDimensions(theWall, myRow, eye) {
        var ct1 = 0
        var ct2 = 0
        while(theWall[myRow-1-ct1][eye]==0) {
            ct1 += 1
        }
        var ct3 = 0

        while(theWall[myRow-ct1][eye+ct2]==0) {
            ct2 += 1
        }
        
        while(theWall[myRow-ct1][eye-ct3]==0) {
            ct3 += 1
        }

        //returning dimension and firstRow
        return [(ct2+ct3-1), (myRow-ct1), ct3, ct3-1]
    }

    calcBrokenCross(theWall, theRow, theI, theDimension, theK, theMult) {
        var tM = [theWall[theRow-theDimension-2][theI], theWall[theRow-theDimension-2][theI-1]]
        var lM = [theWall[theRow-theDimension-1][theI-1], theWall[theRow-theDimension-2][theI-1]]
        var rM = [theWall[theRow-theDimension-1][theI+theDimension], theWall[theRow-theDimension][theI+theDimension]]
        var bM = [theMult*(rM[0]*lM[0]*tM[1]), (rM[1]*lM[1]*tM[0])]
        var blueNumerator  = new bigDecimal((BigInt(lM[0])*BigInt(theWall[theRow-theDimension-3][theI + theDimension -1 - theK])));
        var blueDenominator = new bigDecimal(BigInt(theWall[theRow-theDimension-2][theI + theDimension - 1 - theK])*BigInt(lM[1]));
        var blueItem = (blueNumerator.divide(blueDenominator));
        var greyNumerator = new bigDecimal((BigInt(tM[0])*BigInt(theWall[theRow-2-theK][theI - 2])));
        var greyDenominator = new bigDecimal((BigInt(tM[1])*BigInt(theWall[theRow-2-theK][theI - 1])));
        var greyItem = (greyNumerator.divide(greyDenominator));
        var yellowNums = [new bigDecimal(rM[0]), new bigDecimal(rM[1]*theWall[theRow-1][theI+theK])]
        var redNumerator = new bigDecimal(BigInt(bM[0])*BigInt(theWall[theRow-theDimension-1+theK][theI+theDimension+1])) // the second number is zero
        var redDenominator = new bigDecimal(BigInt(bM[1])*BigInt(theWall[theRow-theDimension-1+theK][theI+theDimension]))
        var redItem = (redNumerator.divide(redDenominator))

        var yellowItem = yellowNums[1].divide(yellowNums[0])


        var ansp2 = new bigDecimal(((-1)**(theK)))
        var ansp22 = ansp2.multiply(greyItem)
        var ansp3 = new bigDecimal(((-1)**(theK+1)))
        var ansp33 = ansp3.multiply(redItem)
        var ansp4 = (blueItem.add(ansp22));
        var ansp5 = ansp4.add(ansp33);
        var ansp6 = ansp5.multiply(yellowItem);
        var ans2 = ansp6.round();
        var ans3 = parseFloat(ans2.getValue());
        var ans4 = Math.round(ans3);
        return ans4;
    }

    calculateInitials(theLineEntered) {
        var myBlock = []
        var myAns = []

        var limit = Math.floor((theLineEntered.length+1)/2)

        for(let i=0; i<limit; i++) {
            myBlock.push([])
            
            for(let j=limit-i-1; j<limit*2-i; j++) {
                myBlock[i].push(theLineEntered[j])
            }
        }

        var limit2 = Math.floor((theLineEntered.length+1)/2)

        for (let i=2; i<limit2+1; i++) {
            let section = myBlock.slice(0,i).map(k => k.slice(0, i))
            var determinant = det(section)
            myAns.push(determinant)
        }

        return myAns

    }


    calcMyData(inList) {

        var tempData = []

        tempData.push([])
        tempData.push([])
        tempData.push([])
        for (let i=0; i<this.state.listNums.length+2; i++) {
            tempData[0].push(BigInt(0))
        }
        for (let i=0; i<this.state.listNums.length+1; i++) {
            tempData[1].push(BigInt(1))
        }
        for (let i=0; i<this.state.listNums.length; i++) {
            tempData[2].push(BigInt(this.state.listNums[i]))
        }


        var firstPass = false;

        var startingCol = 0
        var count = 0
        var skipCount = 0;

        for (let row=3; row<3 + inList.length; row++) {


            var distFromBLC = -1000
            startingCol += 1
            var onZeroSquare = false;
            tempData.push([])

            if(row > 3) {
                var prevRow =  row-1;
                var condition = false;

                var initialValue = tempData[prevRow][startingCol]
                
                for(let i=2; i< tempData[prevRow].length; i++){ 
                    if(tempData[prevRow][i] != initialValue) {
                        condition = true;
                    }
                }
                if(!condition) {
                    tempData[row].push(BigInt(-99999))
                    break;
               }
            }
            
            
            
            
            for(let i=0; i<startingCol; i++) {
                tempData[row].push(NaN)
            }

            var theZScount = -1;

            for(let i=startingCol; i<tempData[row-1].length-1; i++) {
                if(skipCount > 0) {
                    skipCount -= 1;
                    continue
                }

                var dimension = -1;
                var firstRow = -1;
                var theCol = -1;

                if((tempData[row-2][i]==0 && tempData[row-1][i] ==0) || (tempData[row-3][i]==0 && tempData[row-2][i] ==0)){ // took out && !onZeroSquare from each
                    if((tempData[row-3][i]==0 && tempData[row-2][i] ==0)){
                        var answ = this.determineZeroSquareDimensions(tempData, row-3, i)
                        dimension = answ[0]
                        firstRow  = answ[1]
                        theCol = answ[2]
                        distFromBLC = answ[3]
                    } 
                    else {
                        var answ = this.determineZeroSquareDimensions(tempData, row-2, i)
                        dimension = answ[0]
                        firstRow  = answ[1]
                        theCol = answ[2]
                        distFromBLC = answ[3]
                    }
                    onZeroSquare = true
                    firstPass = true
                    theZScount = dimension
                }
                else  { 
                    tempData[row].push(this.calcCross(tempData, row, i))
                }
                if(firstPass) {
                        firstPass = false

                        if(row-dimension >= firstRow) {
                            var theMult = -999
                            if(dimension%2==0){
                                theMult = BigInt(1)
                            }
                            else {
                                theMult = BigInt(-1)
                            }

                            var tM = -999
                            var lM = -999
                            var rM = -999
                            var bM = -999

                            //for calculating the first row underneath a block of zeros
                            if(row-dimension == firstRow) {
                                if(tempData[row-dimension-1][i]!=0) {
                                    console.log("Strange place");
                                    console.log("The side mults")
                                    tM = [tempData[row-dimension-1][i-distFromBLC], tempData[row-dimension-1][i-1-distFromBLC]]
                                    console.log(tM)
                                    lM = [tempData[row-dimension][i-1-distFromBLC], tempData[row-dimension-1][i-1-distFromBLC]]
                                    console.log(lM)
                                    rM = [tempData[row-dimension-1][i+dimension-distFromBLC], tempData[row-dimension][i+dimension-distFromBLC]]
                                    console.log(rM)
                                    bM = [theMult*(rM[0]*lM[0]*tM[1]), (rM[1]*lM[1]*tM[0])]
                                    console.log(bM)
                                    
                                    var beenHere = false;
                                    tempData[row].push(tempData[row][i-1]*bM[1]/bM[0])
                                }
                            }
                            else {
                                var beenHere = false;
                                var newNum = this.calcBrokenCross(tempData, row, i-distFromBLC, dimension, distFromBLC, theMult)
                                tempData[row].push(newNum)
                            }
                        }
                        else {
                            var beenHere = false;
                            tempData[row].push(0);
                        }
                }
            }

        
        }
        return tempData;
    }

    updateData () {
        this.setState({myData:this.calcMyData(this.state.listNums)});
    }

    handleChange(evt) {

        if(evt.target.value[-1] == ',') {
            this.setState({fulllist: evt.target.value, listNums:evt.target.value.split(",").slice(0,-2).map(Number)}, ()=> this.updateData());
        }
        else {
            this.setState({fulllist: evt.target.value, listNums:evt.target.value.split(",").map(Number)}, ()=> this.updateData());
        }
    }

    render() {

        var Boxes = this.state.listNums.map(numm => (<ColorBox 
            background="orange"
            numValue={numm}
            name='red 500'
            key='red'
            moreUrl='/palette/material-ui-colors/red'
            showingFullPallete={true}
        />));
        
        var Boxes2 = this.state.myData.map(row => {
            return (<tr>{row.map(ele => {
                var color
                if((typeof(ele) === 'number') && Number.isNaN(ele)) {
                    color = "green";
                }
                else if(BigInt(ele) % BigInt(2) == 0) {
                    color="red";
                }
                else {
                    color="orange";
                }

                return (<td><ColorBox 
                    background={color}
                    numValue={(ele.toString())}
                    name='red 500'
                    key='red'
                    moreUrl='/palette/material-ui-colors/red'
                    showingFullPallete={true}
                /></td>
            );
            })}</tr>)});


        return (
            <div>
                <h1>Enter your sequence of numbers:</h1>
                <form>
                    <label htmlFor='fulllist'>Full List</label>
                    <input type='text'
                        size="1000"
                        id='fulllist'
                        name='fulllist'
                        defaultValue={this.state.fulllist}
                        onChange={this.handleChange}
                        />
                </form>
                <table className="tall-row">
                    {Boxes2}
                </table>
            </div>

        );
    }

}


export default Form;