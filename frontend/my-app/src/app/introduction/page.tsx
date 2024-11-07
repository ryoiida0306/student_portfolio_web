"use client";

import exp from "constants";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from "react-bootstrap";
import Topbar from "@src/topbar";

const BasicInfo = () => (
  <Card>
    <Card.Body>
      <Card.Title>基本情報</Card.Title>
      <Card.Text>飯田諒</Card.Text>
      <Card.Text>生年月日：2002年3月6日</Card.Text>
      {/* <Card.Text>出身：愛知県名古屋市瑞穂区亀城町1-2-3</Card.Text> */}
      <Card.Text>名古屋工業大学大学院　修士一年　工学研究科工学専攻メディア情報プログラム</Card.Text>
      <Card.Text><a href="https://www.sp.nitech.ac.jp/" target="_blank">徳田・南角・橋本研究室</a></Card.Text>
      <Card.Text>mail：ryo.iida0306@gmail.com</Card.Text>
      {/* <Card.Text>電話番号:070-2232-1245</Card.Text> */}
    </Card.Body>
  </Card>
);

const Links = () => (
  <Card>
    <Card.Body>
      <Card.Title>リンク</Card.Title>
      <Card.Text>GitHub: <a href="https://github.com/ryoiida0306" target="_blank">https://github.com/ryoiida0306</a></Card.Text>
      <Card.Text>AtCoder: <a href="https://atcoder.jp/users/kilshu" target="_blank">https://atcoder.jp/users/kilshu</a>   -最高レート:<span style = {{color: "green"}}>827</span></Card.Text>
      <Card.Text>Kaggle: <a href="https://www.kaggle.com/ryoiida" target="_blank">https://www.kaggle.com/ryoiida</a></Card.Text>
      <Card.Text>研究室HP: <a href="https://www.sp.nitech.ac.jp" target="_blank">https://www.sp.nitech.ac.jp</a></Card.Text>
    </Card.Body>
  </Card>
);

const Career = () => (
  <Card>
    <Card.Body>
      <Card.Title>経歴</Card.Title>
      <Card.Text>2017年4月　東海学園高等学校　飛翔コース　入学</Card.Text>
      <Card.Text>2020年3月　東海学園高等学校　飛翔コース　卒業</Card.Text>
      <Card.Text>2020年4月　名古屋工業大学　工学部第一部　情報工学科　入学</Card.Text>
      <Card.Text>2024年3月　名古屋工業大学　工学部第一部　情報工学科　卒業</Card.Text>
      <Card.Text>2024年4月　名古屋工業大学大学院　工学研究科工学専攻メディア情報プログラム　入学</Card.Text>
      <Card.Text>2026年3月　名古屋工業大学大学院　工学研究科工学専攻メディア情報プログラム　卒業予定</Card.Text>
    </Card.Body>
  </Card>
);

const Skills = () => (
  <Card>
    <Card.Body>
      <Card.Title>スキル</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">基本的な言語</Card.Subtitle>
      <Card.Text>Python, C, C++, Java</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">フロントエンド</Card.Subtitle>
      <Card.Text>HTML, CSS, JavaScript, TypeScript, React, Next.js </Card.Text>
      <Card.Subtitle className="mb-2 text-muted">バックエンド</Card.Subtitle>
      <Card.Text>Node.js, Express, Flask </Card.Text>
      <Card.Subtitle className="mb-2 text-muted">データベース</Card.Subtitle>
      <Card.Text>Prisma </Card.Text>
      <Card.Subtitle className="mb-2 text-muted">機械学習</Card.Subtitle>
      <Card.Text>scikit-learn, Azure Machine Learning</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">ディープラーニング</Card.Subtitle>
      <Card.Text>PyTorch</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">クラウド</Card.Subtitle>
      <Card.Text>AWS</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">ツール</Card.Subtitle>
      <Card.Text>VSCode, GitHub, Docker, Postman</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">OS</Card.Subtitle>
      <Card.Text>Windows, Linux, MacOS</Card.Text>
      {/* <Card.Subtitle className="mb-2 text-muted">バージョン管理</Card.Subtitle>
      <Card.Text>Git</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">CI/CD</Card.Subtitle>
      <Card.Text>GitHub Actions</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">テスト</Card.Subtitle>
      <Card.Text>Jest</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">デプロイ</Card.Subtitle>
      <Card.Text>Vercel, Heroku</Card.Text> */}
      <Card.Subtitle className="mb-2 text-muted">デザイン</Card.Subtitle>
      <Card.Text>Affinity Designer</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">モバイル</Card.Subtitle>
      <Card.Text>Dart, Flutter</Card.Text>
    </Card.Body>
  </Card>
);

const Hobbies = () => (
  <Card>
    <Card.Body>
      <Card.Title>趣味</Card.Title>
      <Card.Text>プログラミング, ボルダリング</Card.Text>
    </Card.Body>
  </Card>
);

const Others = () => (
  <Card>
    <Card.Body>
      <Card.Title>その他</Card.Title>
      <Card.Text><a href="https://www.koudaisai.com/60th/" target="_blank">名古屋工業大学　工大祭実行委員会　第60回工大祭</a>　装飾局長</Card.Text>
    </Card.Body>
  </Card>
);

export default function Introduction() {
  return (
    <>
      <Topbar />
      <Container className="mt-4">
        <h1 className="text-center mb-4">自己紹介</h1>
        <Row className="mb-4">
          <Col><BasicInfo /></Col>
        </Row>
        <Row className="mb-4">
          <Col><Career /></Col>
        </Row>
        <Row className="mb-4">
          <Col><Links /></Col>
        </Row>
        <Row className="mb-4">
          <Col><Skills /></Col>
        </Row>
        <Row className="mb-4">
          <Col><Hobbies /></Col>
        </Row>
        <Row className="mb-4">
          <Col><Others /></Col>
        </Row>
      </Container>
    </>
  );
}