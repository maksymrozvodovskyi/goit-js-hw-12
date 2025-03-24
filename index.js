import{a as h,S as v,i as u}from"./assets/vendor-BH9GyP-n.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const m=t=>t.map(r=>{const{webformatURL:o,largeImageURL:n,tags:e,likes:s,views:l,comments:f,downloads:y}=r;return`<li class="gallery-item">
      <div>
        <a class="gallery-link" href="${n}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${e}" 
            title="${e}"
            width="360"
            height="152"
          />
          </a>
          <div class="img-descr">
            <ul class="list-descr">
              <li class="item-descr">
                <p class="descr-name">Likes</p>
                <p class="descr-value">${s}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Views</p>
                <p class="descr-value">${l}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Comments</p>
                <p class="descr-value">${f}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Downloads</p>
                <p class="descr-value">${y}</p>
              </li>
            </ul>          
          </div>
          </div>
      </li>
      `}).join(""),L="49388465-88aa64a30b18d669aa90a58a7",w="https://pixabay.com/api/";async function p(t,r=1){try{return(await h.get(w,{params:{key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:r}})).data}catch(o){throw console.error("Error fetching data:",o),o}}const E="/goit-js-hw-12/assets/error-DTVyw_U3.png",a={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),searchInput:document.querySelector(".form-input"),loadMoreBtn:document.querySelector(".load-btn")};let c="",i=1,d=0,g=new v(".gallery a",{captionsData:"title",captionDelay:250,scrollZoom:!1});a.formEl.addEventListener("submit",b);a.loadMoreBtn.addEventListener("click",S);async function b(t){if(t.preventDefault(),c=a.searchInput.value.trim(),!c)return u.warning({position:"topRight",message:"Please enter a search term!"});i=1,d=0,a.galleryEl.innerHTML="",a.loadMoreBtn.classList.add("visually-hidden"),a.loaderEl.classList.remove("visually-hidden");try{const r=await p(c,i);if(d=r.totalHits,r.hits.length===0){u.error({position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:E,message:"Sorry, there are no images matching your search query. Please try again!"});return}a.galleryEl.insertAdjacentHTML("beforeend",m(r.hits)),g.refresh(),r.hits.length===15&&d>15&&a.loadMoreBtn.classList.remove("visually-hidden")}catch(r){console.log(r)}finally{a.loaderEl.classList.add("visually-hidden")}}async function S(){i+=1,a.loaderEl.classList.remove("visually-hidden");try{const t=await p(c,i);a.galleryEl.insertAdjacentHTML("beforeend",m(t.hits)),g.refresh(),M(),i*15>=d&&(a.loadMoreBtn.classList.add("visually-hidden"),u.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.log(t)}finally{a.loaderEl.classList.add("visually-hidden")}}function M(){const t=document.querySelector(".gallery-item");if(t){const r=t.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
