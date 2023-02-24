import React, { SetStateAction, useState } from 'react';
import "./view.css";
import Card from "../components/postCard";

function ReactComponent() {

    document.body.classList.add("bg-dark")


    let phoneRef = React.createRef<HTMLImageElement>();
    let mailRef = React.createRef<HTMLImageElement>();
    let photoRef = React.createRef<HTMLDivElement>();

    const copyToClipboard = (str: string) => {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText)
            return navigator.clipboard.writeText(str);
        return Promise.reject('The Clipboard API is not available.');
    };

    return (<>

        <div className="w-100 bg-dark titlecontainer text-light"
            style={{
                position: "relative"
            }}>

            <div className="row g-0 justify-content-center" style={{ paddingTop: `${(document.documentElement.clientHeight / 100 * 10)}px`, bottom: "0px" }}>

                <div className="col text-center fs-1">
                    <h1>Герасимов Александр Андреевич</h1>
                </div>
            </div>

            <div className="row  mt-2 g-0 justify-content-end text-light" style={{ paddingTop: `2%`, bottom: "0px", fontSize: "50px" }}>
                <div className="col">
                    <div onClick={(event) => {
                        if (!phoneRef.current!.getAttribute("aria-describedby")) {
                            setTimeout(() => { phoneRef.current!.click(); }, 2000);
                        } copyToClipboard("+79955071469");
                    }}><i ref={phoneRef} className="bi bi-phone contactIcon" data-bs-custom-class="green-tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-trigger="focus click" data-bs-title="Номер телефона скопирован!"></i>

                    </div>
                </div>
                <div className="col">
                    <a href="https://github.com/AlexC-ux"><i className="bi bi-github text-light contactIcon"></i></a>
                </div>
                <div className="col">
                    <div onClick={(event) => {
                        if (!mailRef.current!.getAttribute("aria-describedby")) {
                            setTimeout(() => { mailRef.current!.click(); }, 2000);
                        } copyToClipboard("eunv2004@gmail.com");
                    }}><i ref={mailRef} className="bi bi-envelope contactIcon" data-bs-custom-class="green-tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-trigger="focus click" data-bs-title="Email скопирован!"></i></div>
                </div>
            </div>
        </div>



        <div className="w-100 bg-dark my-4 mb-5"
            style={{
                position: "relative"
            }}>
            <h2 className="text-center text-light border-bottom my-2 pb-2 mx-auto" style={{ maxWidth: "250px" }}>Навыки</h2>
            <div className="row justify-content-center g-2 my-2 py-2">
                <div className="col contactIcon">
                    <div className="imageContainer" style={{ height: "120px", width: "120px" }}>
                        <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
                <div className="col contactIcon">
                    <div className="imageContainer" style={{ height: "120px", width: "120px" }}>
                        <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
                <div className="col contactIcon">
                    <div className="imageContainer" style={{ height: "120px", width: "120px", backgroundImage: "url('')" }}>
                        <img src="https://zevensource.com/resource/img/shared/logo/tools/cs.svg" style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
                <div className="col contactIcon">
                    <div className="imageContainer" style={{ height: "120px", width: "120px", backgroundImage: "url('')" }}>
                        <img src="https://www.php.net/images/logos/php-logo-white.svg" style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
                <div className="col contactIcon">
                    <div className="imageContainer" style={{ height: "133px", width: "120px", backgroundImage: "url('')" }}>
                        <img src="https://web-creator.ru/uploads/Page/22/nodejs.svg" style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
                <div className="col contactIcon">
                    <div className="imageContainer" style={{ height: "120px", width: "120px", backgroundImage: "url('')" }}>
                        <img src="https://zevensource.com/resource/img/shared/logo/tools/js.svg" style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
                <div className="col contactIcon">
                    <div className="imageContainer" style={{ height: "120px", width: "120px", backgroundImage: "url('')" }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
                <div className="col contactIcon">
                    <div className="imageContainer" style={{ height: "120px", width: "120px", backgroundImage: "url('')" }}>
                        <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
                <div className="col contactIcon">
                    <div className="imageContainer" style={{ height: "120px", width: "120px", backgroundImage: "url('')" }}>
                        <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
            </div>
        </div>


        <div className="container bg-dark text-light mt-5"
            style={{
                position: "relative"
            }}>
            <h2 className="text-center border-bottom my-2 mb-4 pb-2 mx-auto" style={{ maxWidth: "250px" }}>Проекты</h2>





            <Card theme="green" time={new Date("02 25 2023")} tag1={<div>Next.js + React + TypeScript + Node.Js + Redis + Prisma.JS</div>} link="https://github.com/AlexC-ux/pay-to-play" linkText="Открыть github" title="Самописный форум" imageLink="./images/products/paytoplay.png"
                text={<div>Этот форум был разработан для демонстрации навыков использования различных библиотек и фреймворков
                    <br />Стэк: <code>JS</code>, <code>React</code>, <code>Node.js</code>, <code>Typescript</code>, <code>Next.js</code>, <code>Redis</code>, <code>Prisma.JS</code>.
                    <br />С нуля разработанный backend и frontend, 2 поддерживаемых языка: русский и английский, личный кабинет, посты, комменты, лайки, аватарки и всё соответствующее.</div>}
            />

            <Card theme="blue" time={new Date("01 13 2023")} tag1={<div>React + TypeScript + Node.Js</div>} link="https://initiative-accelerator-front-alexc-ux.vercel.app/auth" linkText="Открыть сайт" title="Акселератор инициатив для МСОПР" imageLink="./images/products/initiative-accelerator.png"
                text={<div>Акселератор инициатив - проект Московского педагогического колледжа, которым в данный момент пользуются более 500 пользователей.
                    <br />Стэк: <code>JS</code>, <code>React</code>, <code>Node.js</code>, <code>Typescript</code>.
                    <br />Для проекта Московского педагогического колледжа (Московского студенческого отряда педагогического резерва) "Акселератор инициатив" был разработан <a href='https://github.com/AlexC-ux/initiative-accelerator-server' style={{ color: "#9090e2" }}>backend</a> и <a href='https://github.com/AlexC-ux/initiative-accelerator-front' style={{ color: "#9090e2" }}>frontend</a> с личным кабинетом, админской частью, пользовательской частью. Разделение администраторов по различным уровням. Администрация может создавать задания за которые студенты получают баллы и тратят их в специальном магазине баллов. Телеграм проекта доступен по <a href='https://t.me/mospedreserv' style={{color:"#9090e2"}}>ссылке</a>.</div>}
            />

            <Card theme="red" time={new Date("08 19 2022")} tag1={<div>TypeScript + Node.Js + React</div>} tag2={<a href="https://web.archive.org/web/20220827154459/https://xn--80aerhcl3be.xn--p1ai/"><i className="bi bi-box-arrow-up-right mx-2"></i>WebArchive</a>} link="//активмкт.рф" linkText="Открыть сайт" title="Сайт студентческого актива МКТ" imageLink="./images/products/activemkt.png"
                text={<div>Сайт, разработанный как инициатива студенческого активма Московского колледжа транспорта.
                    <br />Стэк: <code>JS</code>, <code>React</code>, <code>Node.js</code>, <code>Typescript</code>.
                    <br />С нуля разработанный backend и frontend, личный кабинет, квизы и конкурсы.</div>}
            />


            <Card theme="green" time={new Date("04 25 2022")} tag1={<div>Java + PHP</div>} link="//github.com/AlexC-ux/EncryShare-Java" linkText="Открыть репозиторий" title="Мессенджер EncryShare" imageLink="./images/products/encryshare.png"
                text={<div>Мессенджер в котором можно создавать групповые чаты. Сообщения шифруются и хранятся локально.
                    <br />Стэк: <code>Java</code>, <code>PHP</code>.
                    <br />Мобильное приложение написано на Java, из функционала: регистрация в приложении, шифрование сообщений, создание групповых чатов. API написан на PHP.</div>}
            />

            <Card theme="yellow" time={new Date("03 20 2022")} tag1={<div>С# + PHP</div>} link="//github.com/AlexC-ux/EncryShare" linkText="Открыть репозиторий" title="Десктоп приложение EncryShare" imageLink="./images/products/encryshare.png"
                text={<div>Клиент-сервер на C# для передачи сообщений и файлов в зашифрованном виде, прямое подключение по IP.
                    <br />Стэк: <code>С#</code>, <code>PHP</code>.
                    <br />Приложение может выступать как сервером, так и клиентом, соединение происходит по протоколу tcp от клиента к серверу напрямую. Реализовано шифрование всех передаваемых данных и передача файлов и текста.</div>}
            />

            <Card theme="blue" time={new Date("01 31 2022")} tag1={<div>PHP + CMS Joomla</div>} tag2={<a href="//web.archive.org/web/20220322150522/http://mkgt.ru/"><i className="bi bi-box-arrow-up-right mx-2"></i>WebArchive</a>} link="//mkgt.ru" linkText="Открыть сайт" title="Сайт Московского колледжа транспорта" imageLink="./images/products/mkgt.png"
                text={<div>Сайт, разработанный для образовательной организации "Московский колледж транспорта".
                    <br />Стэк: <code>JS</code>, <code>PHP</code>.
                    <br />Основная часть на базе CMS Joomla, доработанный функционал на php, внедрение и кастомизация шаблона под требования заказчика, вёрстка страниц, оптимизация до 85 баллов по GooglePageSpeed, оптимизация мобильной версии сайта.               </div>}
            />



        </div>
    </>
    );
}

export default ReactComponent;