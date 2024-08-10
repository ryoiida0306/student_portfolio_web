"use client";

import exp from "constants";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from "react-bootstrap";
import Topbar from "../../topbar";

const BasicInfo = () => (
  <Card>
    <Card.Body>
      <Card.Title>基本情報</Card.Title>
      <Card.Text>飯田諒</Card.Text>
      <Card.Text>2002年生まれ</Card.Text>
      <Card.Text>愛知出身</Card.Text>
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
      <Card.Subtitle className="mb-2 text-muted">プログラミング言語</Card.Subtitle>
      <Card.Text>Python, JavaScript, Java, C, C++</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">フレームワーク</Card.Subtitle>
      <Card.Text>React, Next.js, Node.js, Express, Bootstrap</Card.Text>
      <Card.Subtitle className="mb-2 text-muted">その他</Card.Subtitle>
      <Card.Text>Git, GitHub, VSCode, Google Colab</Card.Text>
    </Card.Body>
  </Card>
);

const Hobbies = () => (
  <Card>
    <Card.Body>
      <Card.Title>趣味</Card.Title>
      <Card.Text>プログラミング, 読書, 散歩, 旅行</Card.Text>
    </Card.Body>
  </Card>
);

const Others = () => (
  <Card>
    <Card.Body>
      <Card.Title>その他</Card.Title>
      <Card.Text>名古屋工業大学　工大祭実行委員会　第60回工大祭　装飾局長</Card.Text>
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


// $ git rm -rf --cached <対象ファイル or path>
// $ git add <対象ファイル or path>
//  // <対象ファイル or path>部分は、$git ls-files した時に表示されている部分。
//  // --cachedオプションを付けることにより、ファイルを残したまま管理対象から外すことができる。
