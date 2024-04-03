import tes from "../assets/ramadhan/tes.jpg";
import Nav from "../components/Nav";

function Ramadhan() {
  return (
    <>
      <main>
        <article className="grid place-items-center bg-[#171717] pb-10">
          <div className="bg-center bg-cover"></div>
          <div className="w-screen pt-14 md:w-[720px] p-[24px]">
            <h1 className="text-[32px] md:text-[42px] font-bold">
              Keseruan Event Ramadhan
            </h1>
            <img className="pt-5 rounded-[25px]" src={tes}></img>
            <h2 className="pt-5 text-[20px] md:text-24px font-bold">
              Heading 2
            </h2>
            <p className="pt-5 text-[18px] md:text-22px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
              facilisis mauris sit amet massa. Varius vel pharetra vel turpis
              nunc eget lorem dolor sed. Volutpat sed cras ornare arcu dui
              vivamus arcu. Erat imperdiet sed euismod nisi porta. Massa eget
              egestas purus viverra accumsan in nisl. Phasellus vestibulum lorem
              sed risus. Id leo in vitae turpis massa sed. Volutpat ac tincidunt
              vitae semper quis lectus. Hac habitasse platea dictumst
              vestibulum. Pharetra diam sit amet nisl.
              <br /> <br />
              Nec dui nunc mattis enim. Arcu non odio euismod lacinia at quis
              risus sed. Tristique nulla aliquet enim tortor. Pellentesque
              pulvinar pellentesque habitant morbi. Id donec ultrices tincidunt
              arcu non. Nibh nisl condimentum id venenatis a. Arcu non sodales
              neque sodales ut. Eu facilisis sed odio morbi quis commodo odio
              aenean. Ac turpis egestas maecenas pharetra convallis posuere
              morbi leo urna. Leo vel orci porta non. In arcu cursus euismod
              quis viverra nibh cras. Nibh nisl condimentum id venenatis a
              condimentum vitae. Nam libero justo laoreet sit amet cursus sit.
              Lacinia at quis risus sed vulputate odio ut. Platea dictumst
              quisque sagittis purus sit. Massa massa ultricies mi quis
              hendrerit dolor magna eget est. In egestas erat imperdiet sed
              euismod nisi porta lorem.
              <br />
              <br />
              Quis varius quam quisque id diam vel quam elementum. Consequat
              mauris nunc congue nisi vitae suscipit tellus mauris a. Vitae
              elementum curabitur vitae nunc sed velit dignissim sodales ut.
              Accumsan sit amet nulla facilisi morbi tempus. Tellus mauris a
              diam maecenas sed enim ut sem viverra. Bibendum arcu vitae
              elementum curabitur vitae. Vivamus arcu felis bibendum ut
              tristique et egestas. Sem et tortor consequat id porta nibh.
              Cursus in hac habitasse platea dictumst quisque. Nunc vel risus
              commodo viverra maecenas accumsan lacus. Aliquet porttitor lacus
              luctus accumsan tortor posuere ac ut consequat. Risus pretium quam
              vulputate dignissim. Amet facilisis magna etiam tempor orci eu
              lobortis elementum. Nunc aliquet bibendum enim facilisis gravida
              neque convallis a cras. Facilisi nullam vehicula ipsum a. Nec
              feugiat in fermentum posuere. Id aliquet risus feugiat in.
              Tristique senectus et netus et malesuada fames.
              <br />
            </p>
          </div>
        </article>
      </main>
      <Nav />
    </>
  );
}

export default Ramadhan;
