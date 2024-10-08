import type { MetaFunction } from "@remix-run/node";
import MyCards from "./cards.MyCards";
import AppMenu from "./template/menu";

export const meta: MetaFunction = () => {
  return [
    { title: "Atit Sontirak" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
    {<AppMenu />}
    <div className="font-sans">
      {/* <section className="header bg-gray-200 p-3 rounded-xl">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
      </section> */}
      <hr className="mb-3"/>
      <section className="bg-gray-200 p-3 rounded-xl">
      <h1 className="text-3xl">Welcome to React js + Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <img src="\img\me1.jpg" width={250} height={250} />
        <li>Name : Atit Sontirak</li>
        <li>Class : Information Technology</li>
        <li>
          E-mail : <a href="atit.son@rmutto.ac.th">Contact me</a>
        </li>
      </ul>
      </section>
      <hr className="m-3"/>
    </div>
    </>
  );
}