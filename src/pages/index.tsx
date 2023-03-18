import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  NumberZero,
  NumberOne,
  NumberTwo,
  NumberThree,
  NumberFour,
  NumberFive,
  NumberSix,
  NumberSeven,
  NumberEight,
  NumberNine,
  Plus,
  Minus,
  Divide,
  Radical,
  Equals,
  Backspace,
  Eraser,
  X,
} from "phosphor-react";

export default function Home() {
  const [result, setResult] = useState("0");
  const [current, setCurrent] = useState("");
  const ItemSize = 32;

  useEffect(() => {
    const element = document.querySelector(".result");

    if (result.length > 10) {
      element?.classList.add("bigDisplayResult");
      if (result.length > 15) {
        const exponentialNotation = Number.parseFloat(result).toExponential(2);
        setResult(exponentialNotation);
      }
    } else {
      element?.classList.remove("bigDisplayResult");
    }
  }, [result]);

  function clear() {
    setCurrent("");
    setResult("0");
  }

  function backSpace() {
    setResult((res) => (res.length > 1 ? res.slice(0, -1) : "0"));
  }

  function addNumber(number: string) {
    if (number == "0") {
      setResult((res) => (+res == 0 ? "0" : res + number));
    } else {
      setResult((res) => (+res == 0 ? number : res + number));
    }
  }

  function addToCurrent(type: string) {
    if (+result.replace(",", ".") == 0) return;

    if (current.length > 1 && current.search("sqr") == -1) {
      calculate();
    } else {
      setCurrent(`${result} ${type}`);
      setResult("0");
    }
  }

  function calculate() {
    let calcResult: number = 0;

    const currentArr = current.split(" ");
    const numberInCurrent = currentArr[0].replace(",", ".");
    const type = currentArr.pop();

    if (type == "+") {
      calcResult = +numberInCurrent + +result.replace(",", ".");
      showResult(calcResult);
    }

    if (type == "-") {
      calcResult = +numberInCurrent - +result.replace(",", ".");
      showResult(calcResult);
    }

    if (type == "x") {
      calcResult = +numberInCurrent * +result.replace(",", ".");
      showResult(calcResult);
    }

    if (type == "/") {
      calcResult = +numberInCurrent / +result.replace(",", ".");
      showResult(calcResult);
    }

    function showResult(number: number) {
      const fixedResult = parseFloat(number.toFixed(2));
      const calcResultString = fixedResult.toString().replace(".", ",");

      setCurrent("");
      setResult(calcResultString);
    }
  }

  function square() {
    if (+result.replace(",", ".") == 0) return;

    const NumberToSquare = +result.replace(",", ".");
    const calcResult = Math.sqrt(NumberToSquare);
    const fixedResult = parseFloat(calcResult.toFixed(2));
    const calcResultString = fixedResult.toString().replace(".", ",");

    setCurrent(`sqr(${result})`);
    setResult(calcResultString);
  }

  function addDot() {
    if (result.search(",") == -1) {
      setResult((res) => res + ",");
    }
  }

  return (
    <>
      <Head>
        <title>Artur Schincariol Rossi</title>
        <meta
          name="description"
          content="React Calculator by Artur Schincariol Rossi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </Head>
      <main className="main">
        <div className="display">
          <div className="current">{current}</div>
          <div className="result">{result}</div>
        </div>
        <div className="controls">
          <button onClick={clear} className="item">
            <Eraser size={ItemSize} />
          </button>
          <button onClick={square} className="item">
            <Radical size={ItemSize} />
          </button>
          <button onClick={() => addToCurrent("/")} className="item">
            <Divide size={ItemSize} />
          </button>
          <button onClick={() => addToCurrent("x")} className="item">
            <X size={ItemSize} />
          </button>
          <button onClick={() => addNumber("7")} className="item">
            <NumberSeven size={ItemSize} />
          </button>
          <button onClick={() => addNumber("8")} className="item">
            <NumberEight size={ItemSize} />
          </button>
          <button onClick={() => addNumber("9")} className="item">
            <NumberNine size={ItemSize} />
          </button>
          <button onClick={() => addToCurrent("-")} className="item">
            <Minus size={ItemSize} />
          </button>
          <button onClick={() => addNumber("4")} className="item">
            <NumberFour size={ItemSize} />
          </button>
          <button onClick={() => addNumber("5")} className="item">
            <NumberFive size={ItemSize} />
          </button>
          <button onClick={() => addNumber("6")} className="item">
            <NumberSix size={ItemSize} />
          </button>
          <button onClick={() => addToCurrent("+")} className="item">
            <Plus size={ItemSize} />
          </button>
          <button onClick={() => addNumber("1")} className="item">
            <NumberOne size={ItemSize} />
          </button>
          <button onClick={() => addNumber("2")} className="item">
            <NumberTwo size={ItemSize} />
          </button>
          <button onClick={() => addNumber("3")} className="item">
            <NumberThree size={ItemSize} />
          </button>
          <button id="Equals" onClick={calculate} className="item">
            <Equals size={ItemSize} />
          </button>
          <button onClick={backSpace} className="item">
            <Backspace size={ItemSize} />
          </button>
          <button onClick={() => addNumber("0")} className="item">
            <NumberZero size={ItemSize} />
          </button>
          <button onClick={addDot} className="item">
            .
          </button>
        </div>
      </main>
    </>
  );
}
