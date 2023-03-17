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
  Percent,
  Equals,
  Backspace,
  Eraser,
  X,
} from "phosphor-react";

export default function Home() {
  const ItemSize = 40;

  return (
    <>
      <Head>
        <title>Artur Schincariol Rossi</title>
        <meta
          name="description"
          content="React Calculator by Artur Schincariol Rossi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <div className="display">
          <div className="current">64.5</div>
          <div className="result">64.5</div>
        </div>
        <div className="controls">
          <button className="item">
            <Eraser size={ItemSize} />
          </button>
          <button className="item">
            <Percent size={ItemSize} />
          </button>
          <button className="item">
            <Divide size={ItemSize} />
          </button>
          <button className="item">
            <X size={ItemSize} />
          </button>
          <button className="item">
            <NumberSeven size={ItemSize} />
          </button>
          <button className="item">
            <NumberEight size={ItemSize} />
          </button>
          <button className="item">
            <NumberNine size={ItemSize} />
          </button>
          <button className="item">
            <Minus size={ItemSize} />
          </button>
          <button className="item">
            <NumberFour size={ItemSize} />
          </button>
          <button className="item">
            <NumberFive size={ItemSize} />
          </button>
          <button className="item">
            <NumberSix size={ItemSize} />
          </button>
          <button className="item">
            <Plus size={ItemSize} />
          </button>
          <button className="item">
            <NumberOne size={ItemSize} />
          </button>
          <button className="item">
            <NumberTwo size={ItemSize} />
          </button>
          <button className="item">
            <NumberThree size={ItemSize} />
          </button>
          <button id="Equals" className="item">
            <Equals size={ItemSize} />
          </button>
          <button className="item">
            <Backspace size={ItemSize} />
          </button>
          <button className="item">
            <NumberZero size={ItemSize} />
          </button>
          <button className="item">.</button>
        </div>
      </main>
    </>
  );
}
