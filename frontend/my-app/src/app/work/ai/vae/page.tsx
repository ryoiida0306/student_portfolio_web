"use client";

import Topbar from "@src/topbar.tsx";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

require('dotenv').config();
const API_URL = process.env.NEXT_PUBLIC_API_URL;


export default function Home() {
  const [mu1, setMu1] = useState(0);
  const [mu2, setMu2] = useState(0);
  const [log_var1, setLog_var1] = useState(0);
  const [log_var2, setLog_var2] = useState(0);
  const [imagesrc, setImagesrc] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "/img/mu_map.png";
    img.onload = () => {
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.onerror = () => {
      console.log("Error loading image");
    }
  }, []);

  useEffect(() => {
    // GETを送る
    fetch(API_URL + '/vae', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }, []);

  useEffect(() => {
    const fetchImage = async () => {
      setIsFetching(true);
      const image : string = await req_python({ mu1, mu2, log_var1, log_var2 });
      setIsFetching(false);
      setImagesrc(image);
    };
    fetchImage();
  }, [mu1, mu2, log_var1, log_var2]);

  const handleMu1Mu2 = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if(isFetching) {
      return;
    }
    const canvas = e.target as HTMLCanvasElement;
    const rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    
    // 座標をmu1とmu2に変換（例として、canvasの幅と高さを-5から5の範囲にマッピング）
    x = Math.floor(x);
    y = Math.floor(y);
    console.log(x, y);
    if(x < 0 || x > canvas.width || y < 0 || y > canvas.height) {
      return;
    }
    let newMu1 = (x / canvas.width) * 6 - 3;
    let newMu2 = (y / canvas.height) * 7 - 4;
    const gridsize = 0.1;
    newMu1 = Math.floor(newMu1 / gridsize) * gridsize;
    newMu2 = Math.floor(newMu2 / gridsize) * gridsize;
    newMu2 = -newMu2;
    console.log(newMu1, newMu2);

    setMu1(newMu1);
    setMu2(newMu2);
  };

  return (
    <>
      <Topbar />
      <Container>
        <h1>VAE</h1>
      </Container>
      <Container>
        <div>
          パラメータ1 : {mu1}
        </div>
        <div>
          パラメータ2 : {mu2}
        </div>
      </Container>
      <br />
      <Container>
        <Row>
          <Col>
            <div>下のキャンバス内でマウスカーソルを動かすとパラメータ変化します</div>
            <canvas
              id="myCanvas"
              width="512"
              height="512"
              style={{ border: "1px solid #000000" }}
              onMouseMove={handleMu1Mu2}
            />
          </Col>
          <Col>
            <div>パラメータから生成される画像</div>
            {imagesrc ? <img src={imagesrc} alt="Generated" /> : <p>Loading...</p>}
          </Col>
        </Row>
      </Container>
    </>
  );
}



async function req_python({ mu1, mu2, log_var1, log_var2 }: { mu1: number, mu2: number, log_var1: number, log_var2: number }) {

  const url = API_URL + '/vae';
  const data = { mu1, mu2, log_var1, log_var2 };
  console.log(JSON.stringify(data));

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const blob = await response.blob();
    const imgurl: string = URL.createObjectURL(blob);
    return imgurl;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
  }
  return "";
}

