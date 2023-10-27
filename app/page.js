export default function Home() {
  return (
    <main className={"place-content-center border-16 border-transparent h-screen"}>
      <div className={"bg-purple-800 rounded-lg h-3/6 border-2 border-black hover:h-5/6 transition-all ease-in duration-300 flex justify-center items-center"} >
        <p className={"text-center"}> Hello world!</p>
      </div>
      <div className={"bg-teal-500 rounded-lg h-3/6 border-2 border-black hover:scale-y-110 transition-all ease-in duration-300 flex justify-center items-center"} >
          <p className={"text-center"}>Paper rings</p>
      </div>
    </main>
  )
}
