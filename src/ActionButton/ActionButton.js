import { Component } from "react"
import "./action-button.css"
class ActionButton extends Component {
    state = {
        isC: false,
        isLessThanSign: false,
        isDivisionSlash: false,
        isMultiplicationSign: false,
        isSeven: false,
        isEight: false,
        isNine: false,
        isMinusSign: false,
        isFour: false,
        isFive: false,
        isSix: false,
        isPlusSign: false,
        isOne: false,
        isTwo: false,
        isThree: false,
        isEqualSign: false,
        isZero: false,
        isDotOperator: false,
    }
    onC = () => {
        this.setState({
            isC: true,

        })
        console.log("AAAA");
    }
    onLessThanSign = () => {
        this.setState({
            isLessThanSign: true,
        })
        console.log("AAAA");
    }
    onDivisionSlash = () => {
        this.setState({
            isDivisionSlash: true,
        })
        console.log("AAAA");
    }
    onMultiplicationSign = () => {
        this.setState({
            isMultiplicationSign: true,
        })
        console.log("AAAA");
    }
    onSeven = () => {
        this.setState({
            isSeven: true
        })
        console.log(7);
    }
    onEight = () => {
        this.setState({
            isEight: true
        })
        console.log(7);
    }
    onNine = () => {
        this.setState({
            isNine: true
        })
        console.log(7);
    }
    onMinusSign = () => {
        this.setState({
            isMinusSign: true
        })
        console.log(7);
    }
    onFour = () => {
        this.setState({
            isFour: true
        })
        console.log(7);
    }
    onFive = () => {
        this.setState({
            isFive: true
        })
        console.log(7);
    }
    onSix = () => {
        this.setState({
            isSix: true
        })
        console.log(7);
    }
    onPlusSign = () => {
        this.setState({
            isPlusSign: true
        })
        console.log(7);
    }
    onOne = () => {
        this.setState({
            isOne: true
        })
        console.log(7);
    }
    onTwo = () => {
        this.setState({
            isTwo: true
        })
        console.log(7);
    }
    onThree = () => {
        this.setState({
            isThree: true
        })
        console.log(7);
    }
    onEqualSign = () => {
        this.setState({
            isEqualSign: true
        })
        console.log(7);
    }
    onZero = () => {
        this.setState({
            isZero: true
        })
        console.log(7);
    }
    onDotOperator = () => {
        this.setState({
            isDotOperator: true
        })
        console.log(7);
    }

    render() {
        return (
            <span className="span">
                <button className="c" onClick={this.onC}>&#x2201;</button>
                <button className="less-than-sign" onClick={this.onLessThanSign}>&#x3c;</button>
                <button className="division-slash" onClick={this.onDivisionSlash}>&#x2215;</button>
                <button className="multiplication-sign" onClick={this.onMultiplicationSign}>&#xd7;</button>
                <span>
                    <button className="seven" onClick={this.onSeven}>&#x2077;</button>
                    <button className="eight" onClick={this.onEight}>&#x2078;</button>
                    <button className="nine" onClick={this.onNine}>&#x2079;</button>
                    <button className="minus-sign" onClick={this.onMinusSign}>&#x2212;</button>
                </span>
                <span>
                    <button className="four" onClick={this.onFour}>&#x2074;</button>
                    <button className="five" onClick={this.onFive}>&#x2075;</button>
                    <button className="six" onClick={this.onSix}>&#x2076;</button>
                    <button className="plus-sign" onClick={this.onPlusSign}>&#x2b;</button>
                </span>
                <span>
                    <button className="one" onClick={this.onOne}>&#xb9;</button>
                    <button className="two" onClick={this.onTwo}>&#xb2;</button>
                    <button className="three" onClick={this.onThree}>&#xb3;</button>
                    <button className="equal-sign" onClick={this.onEqualSign}>&#x3d;</button>
                </span>
                <span className="abb">
                    <button className="zero" onClick={this.onZero}>&#x2070;</button>
                    <button className="dot-operator" onClick={this.onDotOperator}>&#x22C5;</button>

                </span>

            </span>
        )
    }
}
export default ActionButton