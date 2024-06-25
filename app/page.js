"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";

export default function Home() {
  const [searchVal, setSearchVal] = useState(undefined);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    if (ethers.isAddress(searchVal)) {
      router.push(`address/${searchVal}`);
    } else {
      router.push(`transaction/${searchVal}`);
    }
  };

  return (
    <main id="main">
      <h1 id="title">Blockchain Explorer</h1>
      <div id="header">A Ethereum Blockchain Explorer By Mark Watson</div>
      <div id="content">
        <form>
          <input
            id="search-val"
            type="text"
            placeholder="Search transaction hash / address"
            onChange={(e) => setSearchVal(e.target.value)}
            value={searchVal}
          />
          <button id="submit" type="submit" onClick={search}>
            Search
          </button>
        </form>
      </div>
    </main>
  );
}
