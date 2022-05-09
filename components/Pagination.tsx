import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import SlideImgItem from './SlideImgItem';
// Example items, to simulate fetching from another resources.
var items = [  
  <SlideImgItem imgURL={"/assets/img/portfolio/nissan.png"} imgLink={"https://www.nissanusa.com/"} skillContent={"Next.js + tailwind CSS + Node.js + Postgres"} key="1" />,
  // <SlideImgItem imgURL={"/assets/img/portfolio/nissan.png"} imgLink={"https://www.nissanusa.com/"} skillContent={"Next.js + tailwind CSS + Node.js + Postgres"} key="1" />,
  <SlideImgItem imgURL={"/assets/img/portfolio/wedding.png"} imgLink={"https://www.unforgettableproposals.com.au/"} skillContent={"React + Node.js + API"} key="8" />,
  <SlideImgItem imgURL={"/assets/img/portfolio/human.png"} imgLink={"https://www.greenwoodcampbell.com/"} skillContent={".NET + anime.js + Bootstrap + GSAP"} key="2" />,
  <SlideImgItem imgURL={"/assets/img/portfolio/energy.png"} imgLink={"http://www.ciliocio.com/"} skillContent={"Laravel + UNIX + Bootstrap Theme"} key="13" />,
  <SlideImgItem imgURL={"/assets/img/portfolio/cloth.png"} imgLink={"https://www.thefabricant.studio/"} skillContent={"NFT market form: React + GSAP + Sentry + Styled_Components"} key="14" />,
  <SlideImgItem imgURL={"/assets/img/portfolio/constructor.png"} imgLink={"https://www.fieldfocus.com/"} skillContent={"React + SCSS + Node.js+ Express.js + MongoDB"} key="6" />,
  <SlideImgItem imgURL={"/assets/img/portfolio/Australlia.png"} imgLink={"https://immi.homeaffairs.gov.au/"} skillContent={"Angular + Bootstrap + Express.js + MongoDB"} key="5" />,
  <SlideImgItem imgURL={"/assets/img/portfolio/Angular.png"} imgLink={"https://summerofcode.withgoogle.com/"} skillContent={"Angular + tailwind CSS"} key="3" />,
  <SlideImgItem imgURL={"/assets/img/portfolio/mnting_nft.png"} imgLink={"https://nftest-sandy.vercel.app/"} skillContent={"React + React Hook + TypeScript + Node.js + TailwindCSS + SCSS + GraphQL"} key="4" />,
  <SlideImgItem imgURL={"/assets/img/portfolio/Game.png"} imgLink={"http://gamesite-eight.vercel.app"} skillContent={"React + tailwind CSS + Figma"} key="7" />,
  <SlideImgItem imgURL={"/assets/img/portfolio/Vue.png"} imgLink={"https://www.hovedkontor.no/"} skillContent={"Vue Project : Vue.js + Tailwind CSS"} key="9" />,
  <SlideImgItem imgURL={"/assets/img/portfolio/nftmarket place.png"} imgLink={"https://exoworlds.io/"} skillContent={"Blockchain site : Smart contract + Next.js + TypeScript + Node.js"} key="10" />,
  <SlideImgItem imgURL={"/assets/img/portfolio/First.png"} imgLink={"https://droppgroup.com/"} skillContent={"Company site : Rewact + D3.js + Typescript + Node.js +"} key="11" />,
  <SlideImgItem imgURL={"/assets/img/portfolio/hapeio.png"} imgLink={"https://hape.io/"} skillContent={"React + Solidity + Node.js + Three.js + Express.js + MongoDB"} key="12" />,
  ];                
function Items({ currentItems }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 relative gap-8'>
      {currentItems &&
        currentItems.map(( item: any) => (
          <div key={item.key}>
            {item}
          </div>
        ))}
    </div>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number; }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default function SkillsView(){
  return (
    <>
      <div className='hidden md:block'>
        <PaginatedItems itemsPerPage={6}/>
      </div>
      <div className='md:hidden'>
        <PaginatedItems itemsPerPage={100}/>
      </div>
    </>
  );
}