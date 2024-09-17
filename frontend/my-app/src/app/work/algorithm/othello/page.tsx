"use client";

import Topbar from "@src/topbar";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

require('dotenv').config();
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const [table, setTable] = useState(Array(8).fill(Array(8).fill(0)));
  const [turn, setTurn] = useState(0);
  const [black, setBlack] = useState(0);
  const [white, setWhite] = useState(0);
  const [isFinished, setIsFinished]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  const [winner, setWinner] = useState(0);
  
  useEffect(() => {
    fetch(API_URL + '/othello', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    othelloHandler(-1, -1)();
  }, []);

  const othelloHandler = (i: number, j: number) => async () => {
    const res = await post_data({x: i, y: j});
    setTable(res.table);
    setTurn(res.turn);
    setBlack(res.black);
    setWhite(res.white);
    setIsFinished(res.isFinished);
    setWinner(res.winner);
    console.log(res);
    console.log(res.error)
  }

  const renderCell = (cell: number) => {
    if (cell === 2) return <div className="can-cell"></div>;
    if (cell === 1) return <div className="black-stone"></div>;
    if (cell === -1) return <div className="white-stone"></div>;
  }


  function RenderTable() {
    return (
      <>
        <table className="othello-board">
          <tbody>
            {table.map((row: number[], i) => (
              <tr key={i}>
                {row.map((cell: number, j) => (
                  <td key={j} onClick={othelloHandler(i, j)} className="othello-cell" >
                    {renderCell(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }

  function OthelloStatus() {
    return (
      <>
        <Button onClick={othelloHandler(-1, -1)}>Reset</Button>
        <br />
        <br />
        <div>Turn: {turn === 1 ? "Black" : "White"}</div>
        <div>Black: {black}</div>
        <div>White: {white}</div>
        <div>{isFinished ? `Winner: ${winner === 1 ? "Black" : "White"}` : ""}</div>
        <div>{isFinished ? "Game Over" : ""}</div>
        <div>{isFinished ? "Please click Reset button" : ""}</div>
      </>
    )
  }

  return (
    <>
      <Topbar />
      <h1>Othello</h1>
      <Container>
        <Row>
          <Col>
            <Container>
              <RenderTable />
            </Container>
          </Col>
          <Col>
            <OthelloStatus />
          </Col>
        </Row>
      </Container>

    </>
  )
}

async function post_data(data: {x: number, y: number}) {
  const res = await fetch(API_URL + '/othello', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return res.json();
}

