"use client";

import exp from "constants";
import Image from "next/image";
import { use, useEffect, useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import Topbar from "@src/topbar";
// import { FontAwsomeIcon } from "@fortawesome/react-fontawesome";



export default function Promotion() {

    const [activeKey, setActiveKey] = useState("default");
    

const CarrerAxis = ({ eventKey }: { eventKey : string }) => (
    <Accordion.Item eventKey={eventKey} id="carrer-axis">
        <Accordion.Header>就活の軸</Accordion.Header>
        <Accordion.Body>
            <strong>「成長環境のある企業」</strong>
            <div>私は、「個」の成長に重きを置いた環境での就職を希望しています。
                私は上昇志向が強く、何事にも挑戦して経験値を貯めたい（<a href="#challenge-chance">私の強みの挑戦心のきっかけ</a>参照）
                と考えています。結果的に自身の成長を働く企業に貢献し、私は私の生きた証を作りたいと考えています。
            </div>
            <strong>「自分のスキルを活かせる業界」</strong>
            <div>
            私は、AIとweb業界を2軸で就職活動を行っております。（<a href="#industry">業界選び</a>参照）
            また、趣味として競技プログラミング
            （<a href="#competitive-programming">競技プログラミング</a>参照）
            を行っており、プログラミングスキルを活かせる環境で働きたいと考えています。
            </div>
        </Accordion.Body>
    </Accordion.Item>
);

const MyStrength = ({ eventKey }: { eventKey : string }) => (
    <Accordion.Item eventKey={eventKey} id="my-strength">
        <Accordion.Header>私の強み</Accordion.Header>
        <Accordion.Body>
            <strong>挑戦心</strong>
            <div id = "challenge">
                私の人生において、慣れないことや嫌いなことに敢えて挑戦した機会が多くあります。
                私にはこの根底となる信念があり、挑戦は経験や知識に加えて、新たな環境に身を置かれた時の課題への対応力が身に着くと考えるからです。
                主な具体例として、研究室内での計算機管理のアルバイト経験を挙げます。業務内容は、新導入の計算機の設定や、不具合を解決することです。
                バイトを始める前は計算機管理の知識が全くありませんでしたが、計算機管理という環境に適応するため、
                連絡網で使われる単語や会話で出てきた単語をとりあえず調べる所から始め、先輩に尋ねたりもしました。
                結果、先輩の会話内容が徐々に理解できるようになり、業務も一人でこなせるようになりました。この例のように、
                私は新しい環境に敢えて身を置く挑戦する姿勢を持っています。これを企業では、新たな業務に対して怖気づかず挑戦することで貢献したいです。
            </div>
            <div id="challenge-chance">
            きっかけは、中学生時代の話になりますが、私は中学2年生の頃成績が良いとは言えず、学習塾に通い始めた時、周りの成績の良い生徒との差を考えた時に、
            受かる高校の幅が自分の方が低く、勉強をしていれば行ける高校の幅が広くなっていたという後悔の体験がありました。
            そこから勉強を始めて所望の高校に受かった話は別ですが、勉強をしていれば受かる高校の幅が広がっていたという後悔の体験が自分の中でかなり大きな反省になりました。
            この体験を人生の別の領域でも生かしていきたいと考えた時、多く経験を積んでいれば人生の幅が広がるという考えに至りました。
            多くの経験を得るためには私が今まで関心を示さなかった分野に関しても自分から進んで手を付けることが重要であると考えたので
            何事にも挑戦して自分自身の経験値を貯めるという癖がつきました。
            </div>
            <strong>コミュニケーション能力</strong>
            <div>私が大学祭実行委員会で幹部を務めた経験(<a href="#student-life">学生時代に取り組んだこと</a>)から身に着けることができました。</div>
            <div>きっかけは先輩からの後押しでしたが、高校時代からコミュニケーション能力を鍛えたいと考えており、
                また一年間のリーダー経験を積む機会など早々ないと考えたため、幹部を務めることにしました。
            </div>
        </Accordion.Body>
    </Accordion.Item>
);

const Research = ({ eventKey }: { eventKey : string }) => (
    <Accordion.Item eventKey={eventKey} id="research">
        <Accordion.Header>研究室での活動内容</Accordion.Header>
        <Accordion.Body>
            <p><strong>研究</strong></p>
            <strong>研究概要</strong>
            <div>私は音声合成と呼ばれる、テキストを入力として人間の声を模した音声を
                生成することを目的とする分野で研究を行っています。私は特に深層学習
                を用いた音声合成で、合成音声の時間的間隔を表す「アライメント」と呼ばれるものを、
                精度良く予測する研究を行っています。アライメント予測にあたって近年まで様々な手法
                が提案されてきましたが、依然として課題が残り、学習データに依存してしまう、音素が
                途中で飛んだり繰り返したりしてしまう等の問題がありました。私の研究では、ベースラインとして、
                昨今提案された数理的に整合性の取れたアライメント予測ができるモデルに基づいて、
                従来の課題点を解決できる深層生成モデルを研究しています。この研究をする目的は、
                提案するモデルは、数理的な適切な制約が加わった予測ができるため、
                従来よりも精度の良いアライメント予測や、学習データの削減が期待できます。
                これにより、幅広い感情表現や、方言や低リソース言語などの十分な学習データを取ることが
                できない音声の合成に利用できます。
            </div>
            <strong>研究内容</strong>
            <div>
                音声合成において、昨今提案された数理的に整合性の取れたアライメント予測ができるDNN-HSMMでは、
                音素と対応関係のある状態レベルからより密度の高いフレームレベルへ、同じ状態は複製して写像されるため、
                フレームレベルにおいて音素の接続部分が不自然であり、合成音声の自然性に問題がありました。
                そこで、音声のような可変長のデータに対して相性の良いLSTMを用いて、
                接続部分を滑らかにつなぐように潜在表現の系列変換を行います。
                LSTMは時間軸方向においては自由度が非常に高いため、無鉄砲に用いると、
                接続部分を滑らかにするだけではなく接続部分自体、つまりアライメント自体がずれてしまいます。
                そのため、LSTMをうまく組み合わせる（前向きLSTMと後ろ向きLSTMの2種類の単方向のLSTMを用いて制約を与える）
                ことにより、アライメントをずらすことなく接続部分を滑らかにつなぐことができます。
            </div>    
                {/* <br />
                <br />
                <p><strong>研究の背景と内容(詳しい方向け)</strong></p>
                <strong>背景</strong>
                <div>
                    統計的音声合成におけるアライメント推定には、多様な手法が試みられて来ました。
                    初期に登場したのは数理モデルに基づいているHSMMによる推定でした。
                    しかし、数学的な制約が多く自然性に問題がありました。
                    時代が流れ、深層学習の登場によってアライメントも深層学習で推定することが一般的になり、これにより自然性も大きく向上しました。
                    しかし数理モデルに基づかないため様々な問題が発生します。
                    代表的なモデルとして知られているFastSpeechは外部のアライナーを利用して音素とメルスペクトログラムの
                    アライメントを事前に取得しますが、この方法は学習データに大きく依存するため、データの偏りや不足があるとアライメント精度が低下する可能性があります。
                    また、Tacotronではアテンション機構によりアライメントを動的に推定しますが、発音の繰り返しや飛ばしといったエラーが発生しやすいです。
                    このようにアライメント推定の核となる部分にニューラルネットワークを用いると様々な課題が発生します。
                    一方、これらのモデルと比較して論理的整合性の高いアライメントを得ることが可能なDNN-HSMMというモデルが提案されています。
                    このモデルの核はHSMMによる数理モデルですが、深層学習によってパラメータ生成の自然性を高めたモデルです。
                    しかしこれにも欠点があり、音素と対応関係のある状態レベルで特徴量を管理するため、フレームレベルへ射影された際、音素の接続部分が不自然であり、合成音声の自然性に問題がありました。
                    本研究ではこれらの課題を解決するため、DNN-HSMMにおける音素の接続部分をLSTMによって自然に連結するための手法を提案します。
                </div>
                <strong>内容</strong>
                <div>音声合成において、昨今提案された数理的に整合性の取れたアライメント予測ができるDNN-HSMMでは、音素と対応関係のある状態レベルからより密度の高いフレームレベルへ、
                    同じ状態は複製して写像されるため、フレームレベルにおいて音素の接続部分が不自然であり、合成音声の自然性に問題がありました。
                    そこで、音声のような可変長のデータに対して相性の良いLSTMを用いて、接続部分を滑らかにつなぐように潜在表現の系列変換を行います。
                    LSTMは時間軸方向においては自由度が非常に高いため、無鉄砲に用いると、接続部分を滑らかにするだけではなく接続部分自体、つまりアライメント自体がずれてしまいます。
                    そのため、LSTMをうまく組み合わせる（前向きLSTMと後ろ向きLSTMの2種類の単方向のLSTMを用いて制約を与える）ことにより、アライメントをずらすことなく接続部分を滑らかにつなぐことができます。
                </div> */}

        </Accordion.Body>
    </Accordion.Item>
);

const Industry = ({ eventKey }: { eventKey : string }) => (
    <Accordion.Item eventKey={eventKey} id="industry">
        <Accordion.Header>業界選び</Accordion.Header>
        <Accordion.Body>
            私はAI業界とweb業界を2軸で就職活動を行っております。何故この2つの業界を選んだかについて説明します。
            <strong>AI業界</strong>
            <div>
                大学の研究室での経験や、持続して興味を持てる自信があるためこの業界を選びました。
                深層学習に関して興味を持ったきっかけとして、高校生の頃、AlphaGoZero
            と呼ばれる囲碁のAIが世界チャンピオンに勝つというニュースを見て、AI
            はどのようにして次の打つ手を決めているのかについて，当時はその仕組み
            について理解できませんでしたが，人間の脳を模したモデルであるというこ
            とに興味を持ちました。大学生になり深層学習の授業を受けた際に非常に感
            動したため興味を持ちました。
            研究室に入ってから、AIに関する研究をしていて飽きないと感じたことと、
            自分の研究室でのAIに関する知識を実務でも生かすことができると考えたか
            らです。</div>

            <strong>web業界</strong>
            <div>
                多くの人の目に留まり自分の生きた証をつけることができる、
                またAIと同様に持続して興味を持てる自信があるためこの業界を選びました。
            現在AIの研究室に配属されています
            が、実際に企業で働くことを考えると、自分の生きた証をつけることができる仕事に作りた
            い、つまり自分のしたことが多くの人の目に止まるようなことをしたいと考え
            webにも興味を持ちました。実際に少し勉強をしてみて楽しければこの業
            界も視野に入れようと考えつつ、勉強を進めるとブラウザの仕組みや新
            しい言語を学んだ時，自分自身の知識がアップグレードされる感覚がとても
            やりがいがあり楽しいと感じました。そのため持続して興味を持てる自信があります。
            </div>

        </Accordion.Body>
    </Accordion.Item>
);

const University = ({ eventKey }: { eventKey : string }) => (
    <Accordion.Item eventKey={eventKey} id="university">
        <Accordion.Header>大学選びのきっかけ</Accordion.Header>
        <Accordion.Body>
            <strong>なぜ名古屋工業大学</strong>
            <div>
            名古屋圏内の大学にしたのは、名古屋は産業都市という強みがあるため、
            日本の企業が直面している最新の技術的課題やニーズに触れることができ、
            履修内容や研究もそれにリアルタイムで連動するため、就職後にも自分の知識が生かしやすいと考えたからです。
            東京などの、より都心の産業都市の大学に行く手もありましたが、大学の授業の面では
            名古屋でも東京にあまり劣らないとかんがえ、また名古屋住みの利点も生かしたいと考えたため名古屋にしました。
            </div>
            <strong>何故情報工学か</strong>
            <div>
            数学が好きであり、また人々の役に立つための数学に一番近いのは工学部であったため工部にしました。
            情報工学科にしたのは、中学校や高校のプログラミングの授業での周りの人よりできたという成功体験で情報工学を学びたいと考えました。

            </div>
            <strong>なぜ院に進学した</strong>
            <div>
                学部の授業では情報工学の基本的なことについて学びましたが、
                まだ専門性が足らない、またもう少し勉強する機関が欲しいと考えて院に進みました。
            </div>
            <strong>なぜ博士は行かない</strong>
            <div>
                博士では履修内容が研究に特化しすぎるため、学費と割に合わない、
                また将来働く上でそれほど必要ないと考えたからです。
            </div>
        </Accordion.Body>
    </Accordion.Item>
);

const StudentLife = ({ eventKey }: { eventKey : string }) => (
    <Accordion.Item eventKey={eventKey} id="student-life">
        <Accordion.Header>学生時代に取り組んだこと</Accordion.Header>
        <Accordion.Body>
            <div>
            私は大学祭実行委員会で幹部を務め、メンバーの連携力向上に成功しました。
            この大学祭実行委員会は、毎年2000人の来場者を迎える大学祭の準備や運営を行う300人規模の委員会です。
            私が入った年の前年はコロナ禍であったので、自分の班のメンバー同士の親睦が例年と比較して薄く、連携力に課題がありました。
            この連携力が低いという課題の解決に向けて、
            私なりの3つの取り組みで、メンバー間の連携を高めました。
            1つ目はいつも使っている活動報告のための連絡網とは別の、
            気軽に会話ができる連絡網の設置、2つ目は前年新たな親睦会企画の開催、3つ目は馴染めないメンバーへの積極的な声かけをしました。
            結果、メンバーの交流を促し、連携力向上を実現した。私の新たなる強みとして、
            他者との信頼関係を築いて協力を促進する能力の習得や、私の高校時代からの課題点であったコミュニケーション能力の向上も果たしました。
            この強みをチーム開発で必要とされる円滑な意思疎通や協力体制の構築に活かしていきたいです。
            </div>
            <strong>所属したきっかけ</strong>
            <div>
            高校の頃の気づきとして、クラスでいろんなことが出来たり輝いて見える人に共通して言える特徴として、
            どんな友達とも会話しているという共通点があることに気づきました。
            考察したとき、様々なものを様々な視点で見る力があるという理由がゆえに長けていると感じました。
            比べて、私は大学に入学するまで多く友達を作る方ではなく、高校では親しく話す友達は少人数でした。
            高校でそれに気づいてから親しい友達を増やすような努力をしましたが、既に自分のキャラ付けがされていたり、
            あまりコミュニケーション能力が高くなかったため、友達を思うように増やせませんでした。
            高校卒業後には、大学という新たな環境で友達を作りたいと考えていましたが、
            多くの課題があり、コロナ禍であったことや、自分のコミュニケーション能力を鍛える機会がないこと、高校と比べて1つの教室に集まって話す機会がない
            といった課題がありました。これらの課題に対して、大学祭実行委員会に入るという手段をとりました。
            この委員会では一つの部屋に集まって活動をすることが多かったため、友達を多く作ったり、コミュニケーション能力を上げるいい機会だと思って所属しました。
            </div>
        </Accordion.Body>
    </Accordion.Item>
);

const Intern = ({ eventKey }: { eventKey : string }) => (
    <Accordion.Item eventKey={eventKey} id="intern">
        <Accordion.Header>インターン経験</Accordion.Header>
        <Accordion.Body>
            <p><strong>全体のまとめ</strong></p>
            {/* \item 可読性の高いコーディングの仕方
        \item チーム開発における重要なこと
        \item リーダー経験 */}
            <div>
            インターンシップを通して以下の3つについて学びました。
            </div>
            <strong>可読性の高いコーディングの仕方</strong>
            <div>
            チーム開発ではコードの可読性が重要となるため、インターンシップでは
            現場の社員に可読性の高いコードの書き方を教えていただきました。
            具体的には変数代入では破壊的操作をせず新しく変数を作る、
            ファイルを管理しやすいディレクトリ構造を学びました
            </div>
            <strong>チーム内議論の重要性</strong>
            <div>
            チーム開発で発想力が必要な場面があり、
            その際、効率化を図るためにはチーム内で議論することは自分一人と比べて圧倒的に良いことを学びました。
            議論をすると多角的視点が得られ、効率に直結することを学びました。
            </div>
            <strong>リーダー経験</strong>
            <div>
            あるインターンにおいて、私以外のチームメンバーは開発に主に使用する言語の経験が少なかったため、
            私がリーダーを務め、プログラムの書き方や方針を教えたり、
            課題の難易度や重要度に応じて役割分担を指示するようなリーダー経験を積むことが出来ました。
            </div>
            <br />
            <p><strong>各インターンごとの感想</strong></p>
            <div>
            <strong>インターン経験1</strong>
            <div>
            <strong>インターン先</strong>: 株式会社ヴァル研究所<br />
            <strong>期間</strong>: 4days (2024年8月20日～23日)<br />
            <strong>職種</strong>: webフロントエンド<br />
            <strong>技術領域</strong>: React<br />
            </div>
            <strong>内容</strong><br />
            株式会社ヴァル研究所様が開発するmixwayのapiを叩き、
            レスポンスとしてjsonで返される経路情報を、見やすく表示するプログラムを書きました。
            自分を含め3人でのチーム開発を行い、社員様が1人見守る形での開発をしました
            モブプログラミング（1つのコンピュータを共有しながら作業し、
            実際にコーディングする人は1人で、他のチームメンバーは周りから助言する開発手法）形式で行い、
            実際に作業する人は時間を決めてローテーションしました。<br />
            <strong>学んだこと</strong><br />
            チーム開発としての連携が、プログラムの質の向上に直結することを学びました。
            2日目までは、チームメンバーに1人Reactの経験が少ない人に対して、
            私がプログラムの表面的な助言のみ、つまり見よう見まねでコーディングさせ、
            開発を早く完成させることに重きにおいて進めました。
            しかし、反省をする時間では、メンバー同士の認識ズレが起き、
            また可読性やより簡単なロジックを書くための議論ができなくなり、
            かえって作業時間も伸びるという反省をしました。改善策として、私はチーム全体が
            コードを把握しているかを確認する、分からない人は積極的に質問することを実施しました。
            3日目以降では認識ズレが起きず、可読性も、作成するメソッドの汎用性等も向上しました。
            開発速度は少し落ちたが、将来的には教える前に比べて早くなる可能性を感じました。
            </div>
            <br />
            <div>
            <strong>インターン経験2</strong>
            <div>
            <strong>インターン先</strong>: Sky株式会社<br />
            <strong>期間</strong>: 3days (2024年9月2日～4日)<br />
            <strong>職種</strong>: webフロントエンド<br />
            <strong>技術領域</strong>: React, next.js<br />
            </div>
            <strong>内容</strong><br />
            アンケートページの作成を行いました。
            4人でチーム開発しました。<br />
            <strong>学んだこと</strong><br />
            チーム開発におけるリーダーの経験を積むことが出来ました。
            私以外のチームメンバーはReactの経験が少なかったため、
            私がリーダーを務め、プログラムの書き方や方針を教えたり、
            課題の難易度や重要度に応じて役割分担を指示しました。
            しかし、分からない時積極的に私に聞いて頂けない人がいることに気付いたため、
            長時間手が止まっていたり考えている人に対しては私から積極的に呼びかけることによって、
            開発をスムーズに進められました。
            </div>
            <br />
            <div>
            <strong>インターン経験3</strong>
            <div>
            <strong>インターン先</strong>: TDSE株式会社<br />
            <strong>期間</strong>: 2days (2024年9月5日～6日)<br />
            <strong>職種</strong>: データサイエンティスト<br />
            <strong>技術領域</strong>: Azure Machine Learning<br />
            </div>
            <strong>内容</strong><br />
            顧客の要望に応じた機械学習モデルを構築し、モデルの出力から効果試算で利益を見込み、
            顧客にプレゼンテーションをする、仕事としてのデータサイエンティスト業務体験をしました。
            5人のチームによって業務体験をしました。<br />
            <strong>学んだこと</strong><br />
            仕事としてのデータサイエンティストのイメージを具体的につかむことが出来ました。
            私がインターンに興味を持ったきっかけは大学の講義やKaggleでのモデル構築体験です。
            参加前はモデルの仕組みや精度等の、数学的な観点のみを見て興味を持ち参加しました。
            しかし実際に参加して、モデルの精度だけが重要ではなく、
            顧客の要望という言語をどのように数学に落とし込むのか、最終的に利益につなげるためにはどうするべきか、
            効果試算の考え方、時間管理で期日を守る、などの仕事としての体験ができました。
            </div>

        </Accordion.Body>
    </Accordion.Item>
);

const Hackathon = ({ eventKey }: { eventKey : string }) => (
    <Accordion.Item eventKey={eventKey} id="hackathon">
        <Accordion.Header>ハッカソン経験</Accordion.Header>
        <Accordion.Body>
            <div>
            <strong>ハッカソン1</strong>
            <div>
            <strong>期間</strong>: 1週間 (2024年7月13日～2024年7月20日)<br />
            <strong>開発領域</strong>: Androidアプリケーション<br />
            <strong>技術領域</strong>: Dart, Flutter<br />
            <strong>チーム人数</strong>: 5人<br />
            </div>
            <strong>内容</strong><br />
            ハッカソンに出場し、出席確認アプリの開発に携わりました。
            このアプリは、Bluetoothを利用して会議の主催者と参加者間で通信し、
            参加者が打刻できるようなアプリです。チーム内で、私は参加者向け画面の実装を担当しました。
            開発過程で直面した主な課題は、チーム内のコミュニケーションと作業分担の不明確さでした。
            特に、2人で1つの画面を担当する際、実装方法や前提条件の認識の違いから、
            コードの大きなコンフリクトが発生しました。この問題に対処するため、私たちは一旦実装を区切り、
            コンフリクトがさらに肥大することを防ぐためマージしました。その後、追加実装に関して事前に綿密な打ち合わせを行い、
            各メンバーの担当部分を明確に分割しました。
            結果として、チーム全員が満足する完成度の高いアプリケーションを開発することができました。
            この経験から、効果的なチーム開発の手法、特にプロジェクト開始時点での明確な役割分担や、
            コンフリクト防止のための事前計画の重要性を深く理解しました。今後私がチーム開発プロジェクトを担う際には、
            これらの経験を生かした綿密な会議を通して効率的な実装を意識し、
            実務で働く上でもこの経験を強みとして生かしていきたいです。
            </div>
        </Accordion.Body>
    </Accordion.Item>
);

const Life = ({ eventKey }: { eventKey : string }) => (
    <Accordion.Item eventKey={eventKey} id="life">
        <Accordion.Header>人生の分岐点</Accordion.Header>
        <Accordion.Body>
            <div>
            <strong>1つ目</strong>
            <div>
            学祭実行委員会に所属し、コミュニケーション能力が向上したことです。(<a href="#student-life">学生時代に取り組んだこと</a>を参照)
            この体験でコミュニケーション能力が鍛えられたことで、
            インターンやハッカソンでその能力を発揮でき、
            仕様検定の段階で意見が衝突しても、お互いの関係性を崩すことなく
            また、互いの利点を活かすことができるようなアイデアの発展にも繋がりました。
            また、他の場面でも、大学の研究室内の友達との
            コミュニケーションもスムーズになり、
            企業説明会でお会いする他のインターン生との会話も弾むようになるなど、
            人生で最も大きな分岐点となりました。
            </div>
            <strong>2つ目</strong>
            <div>
            高校の学内順位が高く、無意識的な勉強へのモチベーションがついたことです。
            私が通っていた高校は特別に頭が良かったわけではありませんでしたが，
            一年生の最初の定期テストで校内で二位を取れたことがきっかけで，自信が付き，勉強のモチベーションに繋がりました．
            それがきっかけとなり，自分の周りの人より能力が高い存在でありたいという欲が芽生え，
            基礎学力も上がり現在の大学に合格できたりするなどの結果が出せたと考えています．
            大学に入学してからはその精神のみが残っており、
            意識的に自分より能力が高い人をライバル視することはありませんが、
            自分の行動を見返すと
            無意識的にそのような人を超えられるように努力をしていると感じています．
            </div>
            <strong>3つ目</strong>
            <div>
            中学の塾での他の生徒との差で後悔し、多くの経験を積むことの重要性を学んだことです．
            結果的に挑戦心（<a href="my-strength">私の強み</a>参照）に繋がりました。
            私はその時期私は頭が良くも悪くもなく平凡でしたが，
            学習塾内のイベントで２泊３日の勉強合宿に参加した時，
            その学習塾のクラス分け制度として，学力が高い順に5つのクラスに振り分けられるという制度がありました．
            塾生の生徒全体が比較的学力が高かったこともあり，私は下から2番目のクラスに振り分けられ
            屈辱を味わったことで，他の塾生との学力の差を非常に意識するようになりました．
            また，中学三年生になったときには，進学する高校について考え始め，
            学力が高い人は，この学力帯の高校，そこまで高くない人はこの学力帯の高校，といったように
            自分の学力が周りと比べて低いことによって進路に大きく影響する，という経験を学びました．
            勉強のモチベーションに繋がりましたが，
            それ以上に，
            勉強をしていれば受かる高校の幅が広がっていたという後悔の体験が自分の中でかなり大きな反省になりました。
            この体験を人生の別の領域でも生かしていきたいと考えた時、多く経験を積んでいれば人生の幅が広がるという考えに至りました。
            多くの経験を得るためには私が今まで関心を示さなかった分野に関しても自分から進んで手を付けることが重要であると考えたので
            何事にも挑戦して自分自身の経験値を貯めるという癖がつきました。
            </div>
            <strong>4つ目</strong>
            <div>
            大学に合格したことです．
            私は現在の大学に第一志望校として入学を果たしたのですが，
            第二志望校のカリキュラムと比べて非常にやりがいのあるカリキュラムであって
            現在の大学であって本当に良かったと思いました．
            </div>
            <strong>5つ目</strong>
            <div>
            小学生の委員会で、自分で考えて行動する能力が身についたこと．
            小学生の頃所属していた環境委員で，業務連絡だけをする場で，間違えて「しゃもじについたごはん粒をきれいに取って返してほしい」
            という連絡をしたことが，逆に先生に褒められたことで自分で考えて行動する能力が身につきました．
            </div>
            </div>
            
        </Accordion.Body>
    </Accordion.Item>
);

const CompetitiveProgramming = ({ eventKey }: { eventKey : string }) => (
    <Accordion.Item eventKey={eventKey} id="competitive-programming">
        <Accordion.Header>競技プログラミング</Accordion.Header>
        <Accordion.Body>
            <div>
            私はAtCoderを用いてアルゴリズム思考能力を鍛え上げました。
            最初は思うように結果が出ず、レーティングの上昇も不安定でした。
            そこで、コンテスト参加や過去問を通して、自分の弱点を分析し、以下の3点を弱点として挙げました。
            <ul>
                <li>解法の発想が出てこない</li>
                <li>コーディング速度が遅い</li>
                <li>コードが複雑になる</li>
            </ul>
            これらの弱点を克服するため、個別にトレーニングを行いました。
            <br />
            <strong>解法の発想が出てこない</strong><br />
            これに陥るパターンは2つ挙げられ、1つ目は自分の知らないデータ構造が使われる時である。
            これは、別のサイトを通してデータ構造の勉強を行うことで解消できます。
            2つ目は解法をなんとなくで考えてしまう時です。
            これを解消する方法として、問題の計算量から逆算して、
            解法のどこに計算量のボトルネックがあるかを考えるというトレーニングを行いました。
            過去問を用いたトレーニングでは、ひたすらボトルネックを意識して探す練習をしました。
            その結果、解法の発想が出やすくなりました。
            <br />
            <strong>コーディング速度が遅い</strong><br />
            この弱点を解消するため、過去問のAからC問題（比較的簡単な問題）をコーディン速度にこだわって解く練習を行いました。
            理由は、単純なロジックに対して素早く整理できるようになることで、応用問題を解く上でも問題を細分化し、
            単純なロジックに落とし込んだ時に、意識せずとも素早く整理ができるようになるためです。
            この結果、コーディング速度は上昇しました。
            <br />
            <strong>コードが複雑になる</strong><br />
            この弱点を解消するため、自分の回答と模範解答を比較し、
            どの部分が複雑になっているかを分析し、その部分をシンプルにするように心がけました。
            その結果、コードの複雑さが減少し、可読性が向上しました。
            <br />
            <br />
            このように弱点を個別に克服することで、徐々にレート上昇が安定し、
            現在(2024年11月9日)では上位約25％に入る、レーティング866を達成しています。
            この経験で鍛えられた、プログラミング能力や継続力、
            課題点に対するアプローチの仕方を実務でも生かしていきたいと考えています。
            </div>
        </Accordion.Body>
    </Accordion.Item>
);

const Links = () => (
    <div className="text-center mt-4">
        <a href="https://github.com/ryoiida0306" target="_blank" rel="noopener noreferrer" className="me-4">
        GitHubリンク
        </a>
        <a href="https://atcoder.jp/users/kilshu" target="_blank" rel="noopener noreferrer" className="me-4">
        AtCoderリンク
        </a>
        <a href="https://www.kaggle.com/ryoiida" target="_blank" rel="noopener noreferrer">
        Kaggleリンク
        </a>
        <a href="http://iidaryo-portfolio.com:3000/" target="_blank" rel="noopener noreferrer" className="ms-4">
        このサイト
        </a>
        <a href="https://www.sp.nitech.ac.jp/" target="_blank" rel="noopener noreferrer" className="ms-4">
        研究室HP
        </a>
        <br />
        <a href="https://github.com/ryoiida0306/AIs" target="_blank" rel="noopener noreferrer" className="ms-4">
        個人探求のAI深層学習ライブラリリンク
        </a>
        <a href="https://github.com/ryoiida0306/student_portfolio_web" target="_blank" rel="noopener noreferrer" className="ms-4">
        このサイトのリポジトリ
        </a>
        <a href="https://github.com/Conan-Wen/attendance_app" target="_blank" rel="noopener noreferrer" className="ms-4">
        ハッカソン(出席確認アプリリポジトリ)
        </a>
        {/* <a href="https://github.com/ryoiida0306" target="_blank" rel="noopener noreferrer" className="me-4">
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://atcoder.jp/users/kilshu" target="_blank" rel="noopener noreferrer" className="me-4">
            <FontAwesomeIcon icon={faCode} size="2x" />
        </a>
        <a href="https://www.kaggle.com/ryoiida" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faKaggle} size="2x" />
        </a>
        <a href="http://iidaryo-portfolio.com:3000/" target="_blank" rel="noopener noreferrer" className="ms-4">
            <FontAwesomeIcon icon={faLink} size="2x" />
        </a>
        <a href="https://www.sp.nitech.ac.jp/" target="_blank" rel="noopener noreferrer" className="ms-4">
            <FontAwesomeIcon icon={faUniversity} size="2x" />
        </a>
        <a href="https://github.com/ryoiida0306/AIs" target="_blank" rel="noopener noreferrer" className="ms-4">
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://github.com/ryoiida0306/student_portfolio_web" target="_blank" rel="noopener noreferrer" className="ms-4">
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://github.com/Conan-Wen/attendance_app" target="_blank" rel="noopener noreferrer" className="ms-4">
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a> */}
    </div>
);



const Brank = () => (
    <>
    <div style = {{backgroundColor: "#c8c8c8"}}>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    </div>
    </>

);




  return (
    <>
      <Topbar />
      <Container className="mt-4">
        <h1 className="text-center mb-4">プロモーション</h1>
        {/* <Accordion activeKey={activeKey} onSelect={(e) => setActiveKey(typeof e === 'string' ? e : "default")}> */}
        <Accordion defaultActiveKey="default">
            <CarrerAxis eventKey="0" />
            <MyStrength eventKey="1" />
            <Research eventKey="2" />
            <Industry eventKey="3" />
            <StudentLife eventKey="4" />
            <Intern eventKey="5" />
            <Hackathon eventKey="6" />
            <Life eventKey="7" />
            <University eventKey="8" />
            <CompetitiveProgramming eventKey="9" />
        </Accordion>
        <br />
        <p className="text-center">リンク集</p>
        <Links />
            
      </Container>
        <Brank />
        {/* <button onClick={() => setActiveKey("0")} className="btn btn-primary">キャリア軸</button> */}
    </>
  );
}