import React from 'react';
import "./view.css";
import Card from "../components/postCard";

function ReactComponent() {

    document.body.classList.add("bg-dark")

    return (<>
        <div className="w-100 bg-dark titlecontainer text-light" style={{ height: `${document.documentElement.clientHeight}px` }}>
            <div className="row g-0 justify-content-center" style={{ paddingTop: `${(document.documentElement.clientHeight / 100 * 60)}px`, bottom: "0px" }}>
                <div className="col text-center fs-1">
                    <h1>Герасимов Александр Андреевич</h1>
                    <div className="d-block btn btn-outline-secondary mx-auto mt-3" style={{ maxWidth: "200px" }}>
                        123123
                    </div>
                </div>
            </div>

            <div className="row  mt-2 g-0 justify-content-end text-light" style={{ paddingTop: `2%`, bottom: "0px", fontSize: "50px" }}>
                <div className="col">
                    <i className="bi bi-phone contactIcon"></i>
                </div>
                <div className="col">
                    <i className="bi bi-github contactIcon"></i>
                </div>
                <div className="col">
                    <i className="bi bi-envelope contactIcon"></i>
                </div>
            </div>
        </div>



        <div className="w-100 bg-dark my-4 mb-5">
            <h2 className="text-center text-light border-bottom my-2 pb-2 mx-auto" style={{ maxWidth: "250px" }}>Навыки</h2>
            <div className="row justify-content-center g-2 my-2 py-2">
                <div className="col contactIcon">
                    <div className="imageContainer" style={{ height: "120px", width: "120px" }}>
                        <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" style={{ width: "100%", height: "100%" }} />
                        {/*<i className="arrowBottomPos bi bi-arrow-down-right-square"></i>*/}
                    </div>
                </div>
                <div className="col contactIcon">
                    <div className="imageContainer" style={{ height: "120px", width: "120px", backgroundImage: "url('')" }}>
                        <img src="https://zevensource.com/resource/img/shared/logo/tools/cs.svg" style={{ width: "100%", height: "100%" }} />
                        {/*<i className="arrowBottomPos bi bi-arrow-down-right-square"></i>*/}
                    </div>
                </div>
                <div className="col contactIcon">
                    <div className="imageContainer" style={{ height: "120px", width: "120px", backgroundImage: "url('')" }}>
                        <img src="https://uploads-ssl.webflow.com/62038ffc9cd2db4558e3c7b7/6242ba88faee5ceb27b7d9bf_php.svg" style={{ width: "100%", height: "100%" }} />
                        {/*<i className="arrowBottomPos bi bi-arrow-down-right-square"></i>*/}
                    </div>
                </div>
                <div className="col contactIcon">
                    <div className="imageContainer" style={{ height: "133px", width: "120px", backgroundImage: "url('')" }}>
                        <img src="https://web-creator.ru/uploads/Page/22/nodejs.svg" style={{ width: "100%", height: "100%" }} />
                        {/*<i className="arrowBottomPos bi bi-arrow-down-right-square"></i>*/}
                    </div>
                </div>
                <div className="col contactIcon">
                    <div className="imageContainer" style={{ height: "120px", width: "120px", backgroundImage: "url('')" }}>
                        <img src="https://4ireacademy.com/wp-content/uploads/2021/08/javascript.svg" style={{ width: "100%", height: "100%" }} />
                        {/*<i className="arrowBottomPos bi bi-arrow-down-right-square"></i>*/}
                    </div>
                </div>
                <div className="col contactIcon">
                    <div className="imageContainer" style={{ height: "120px", width: "120px", backgroundImage: "url('')" }}>
                        <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" style={{ width: "100%", height: "100%" }} />
                        {/*<i className="arrowBottomPos bi bi-arrow-down-right-square"></i>*/}
                    </div>
                </div>
                <div className="col contactIcon">
                    <div className="imageContainer" style={{ height: "120px", width: "120px", backgroundImage: "url('')" }}>
                        <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" style={{ width: "100%", height: "100%" }} />
                        {/*<i className="arrowBottomPos bi bi-arrow-down-right-square"></i>*/}
                    </div>
                </div>
            </div>
        </div>


        <div className="container bg-dark text-light mt-5">
            <h2 className="text-center border-bottom my-2 pb-2 mx-auto" style={{ maxWidth: "250px" }}>Проекты</h2>
            <Card theme="red" time={new Date("08 19 2022")} tag1=<div>TSX + Node.Js</div> tag2=<a href="https://web.archive.org/web/20220827154459/https://xn--80aerhcl3be.xn--p1ai/"><i className="bi bi-box-arrow-up-right mx-2"></i>WebArchive</a> link="//активмкт.рф" linkText="Открыть сайт" title="Сайт студентческого актива МКТ" imageLink="/images/products/activemkt.png"
                text=<div>Сайт, разработанный как инициатива студенческого активма Московского колледжа транспорта.
                    <br />Стэк: <code>JS</code>, <code>React</code>, <code>Node.js</code>, <code>Typescript</code>, <code>HTML5</code>, <code>CSS</code>.
                    <br />С нуля разработанный backend и frontend, личный кабинет, квизы и конкурсы.</div>
            />

            <Card theme="green" time={new Date("04 25 2022")} tag1=<div>PHP + CMS Joomla</div> link="//github.com/AlexC-ux/EncryShare-Java" linkText="Открыть репозиторий" title="Мессенджер EncryShare" imageLink="/images/products/encryshare.png"
                text=<div>Сайт, разработанный для образовательной организации "Московский колледж транспорта".
                    <br />Стэк: <code>Java</code>, <code>PHP</code>.
                    <br />Мобильное приложение написано на Java, из функционала: регистрация в приложении, шифрование сообщений, создание групповых чатов. API написан на PHP.</div>
            />

            <Card theme="blue" time={new Date("01 31 2022")} tag1=<div>PHP + CMS Joomla</div> tag2=<a href="//web.archive.org/web/20220322150522/http://mkgt.ru/"><i className="bi bi-box-arrow-up-right mx-2"></i>WebArchive</a> link="//mkgt.ru" linkText="Открыть сайт" title="Сайт Московского колледжа транспорта" imageLink="/images/products/mkgt.png"
                text=<div>Сайт, разработанный для образовательной организации "Московский колледж транспорта".
                    <br />Стэк: <code>JS</code>, <code>PHP</code>, <code>HTML5</code>, <code>CSS</code>.
                    <br />Основная часть на базе CMS Joomla, доработанный функционал на php, внедрение и кастомизация шаблона под требования заказчика, вёрстка страниц, оптимизация до 85 баллов по GooglePageSpeed, оптимизация мобильной версии сайта.               </div>
            />

            

        </div>
    </>
    );
}

export default ReactComponent;