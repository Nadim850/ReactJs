import React, { useState, useCallback, useEffect, useRef } from "react";

export default function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  let passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*-=+~";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    //to select between range
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 mt-4 text-amber-500 bg-gray-800">
        <h1 className="text-white text-center ">password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            placeholder="password"
            value={password}
            readOnly
            ref={passwordRef}
            className="bg-white outline-none w-full py-1 px-3 text-gray-500"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 px-3 py-0.5 shrink-0 text-white"
          >
            copy
          </button>
        </div>

        {/* input area */}
        <div className="flex text-sm gap-x-2">
          {/* input area: range */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-white">length:{length}</label>
          </div>
          {/* input area: number checkbox */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          {/* input area: char checkbox */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="charInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}
