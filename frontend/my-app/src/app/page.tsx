"use client";

import Image, { StaticImageData } from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Topbar from "@src/topbar";
import vaeimg from "@img/mu_map.png";
import introimg from "@img/intro.jpg";
import othelloimg from "@img/othello.png";

export default function Home() {
  return (
    <>
      <Topbar />
      <Title />
      <Space />
      <Container>
        <h1>このサイトは何のために作った？</h1>
        <WhatIsThis />
      </Container>
      <Space />
      <Container>
        <h1>ピックアップ</h1>
        <CardList />
      </Container>
    </>
  );
}

function WhatIsThis() {
  return (
    <Container>
      <p>これは、私のポートフォリオサイトです。</p>
      <p>私の基本情報や、過去の経験、スキルに関して紹介します。</p>
      <p>また、私が作成した製作物についても紹介します。</p>
    </Container>
  );
}

function Space() {
  return (
    <Container className="space">
    </Container>
  );
}

function Title() {
  return (
    <Container className="title-container">
      <header>
          <h1 className="title">RyoIida&apos;s Portfolio</h1>
          <span className="subtitle">Introduction and My work</span>
      </header>
    </Container>
  );
}

function CardList() {
  const cardComponents = [
    { component: IntroductionCard, key: 'IntroductionCard' },
    { component: OthelloCard, key: 'OthelloCard' },
    { component: VAECard, key: 'VAECard' },
  ];
  return(
    <Container>
      <Row>
        {cardComponents.map((cardComponent) => (
          <Col xs="auto" key={cardComponent.key}>
            {cardComponent.component()}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function IntroductionCard() {
  const titletext = "自己紹介";
  const maintext = "私の基本情報や、過去の経験、スキルに関して紹介します。";
  const imgsrc: StaticImageData = introimg;
  const link = "/introduction";
  return (
    myCard(titletext, maintext, imgsrc, link)
  );
}

function OthelloCard() {
  const titletext = "オセロ";
  const maintext = "アルゴリズムに関する製作物です。オセロの開発を行いました。";
  const imgsrc: StaticImageData = othelloimg;
  const link = "/work/algorithm/othello";
  return (
    myCard(titletext, maintext, imgsrc, link)
  );
}

function VAECard() {
  const titletext = "VAE";
  const maintext = "AIに関する製作物です。VAEと呼ばれる生成モデルを用いて、画像を生成します。"
  const imgsrc: StaticImageData = vaeimg;
  const link = "/work/ai/vae";
  return (
    myCard(titletext, maintext, imgsrc, link)
  );
}

function myCard(titletext:string, maintext:string, imgsrc:StaticImageData, link:string) {

  return (
    <Card style={{ width: '18rem' }}>
    <Image alt="VAE Image" src={imgsrc} width={286} height={180} />
    <Card.Body>
      <Card.Title>{titletext}</Card.Title>
      <Card.Text>
        {maintext}
      </Card.Text>
      <Button variant="primary" href={link}>このページへ移る</Button>
    </Card.Body>
  </Card>
  );
}
