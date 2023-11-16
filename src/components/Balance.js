import React, { useState } from "react";
import { alchemy } from "../lib/alchemy";
import { isAddress } from "ethereum-address";
import { Utils } from "alchemy-sdk";

export function Balance() {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isAddress(address)) {
      alert("this is not a valid ethereum address");
    } else {
      const tokenBalance = await alchemy.core.getBalance(address);
      console.log(tokenBalance);
      setBalance(Utils.formatEther(tokenBalance));
      setAddress("");
    }
  }

  function handleChange(e) {
    setAddress(e.target.value);
  }

  return (
    <div className="mt-4">
      <h4 className="text-2xl">Get your eth balance</h4>

      <form className="mt-2" onSubmit={handleSubmit}>
        <label htmlFor="address">Address</label>
        <input
          className="border border-blue-500 ml-4"
          type="text"
          id="address"
          placeholder="Ethereum address"
          name="address"
          value={address}
          onChange={handleChange}
        />

        <button
          className="block mt-2 border border-blue-500 rounded-2xl p-2 hover:bg-blue-700 hover:text-white transition-all ease-in"
          type="submit"
        >
          Check Balance
        </button>
      </form>

      {balance && <p className="mt-2 text-green-800">{balance}</p>}
    </div>
  );
}
