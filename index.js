import{a as u,i as c,S as m}from"./assets/vendor-BH9GyP-n.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p=l=>l.map(s=>{const{webformatURL:o,largeImageURL:i,tags:e,likes:r,views:a,comments:n,downloads:d}=s;return`<li class="gallery-item">
      <div>
        <a class="gallery-link" href="${i}">
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
                <p class="descr-value">${r}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Views</p>
                <p class="descr-value">${a}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Comments</p>
                <p class="descr-value">${n}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Downloads</p>
                <p class="descr-value">${d}</p>
              </li>
            </ul>          
          </div>
          </div>
      </li>
      `}).join(""),f="49388465-88aa64a30b18d669aa90a58a7",g="https://pixabay.com/api/";function y(){return u.get(g,{params:{key:f,q:t.searchInput.value,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const h="/goit-js-hw-12/assets/error-DTVyw_U3.png",t={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),searchInput:document.querySelector(".form-input")};t.formEl.addEventListener("submit",v);function v(l){if(l.preventDefault(),t.searchInput.value.trim()==="")return c.warning({position:"topRight",message:"Please enter a search term! something"});t.loaderEl.classList.remove("visually-hidden"),t.galleryEl.innerHTML="",y().then(s=>{if(s.data.hits.length===0)return t.formEl.reset(),c.error({position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:h,message:"Sorry, there are no images matching your search query. Please try again!"});t.galleryEl.insertAdjacentHTML("beforeend",p(s.data.hits)),t.formEl.reset(),new m(".gallery a",{captionsData:"title",captionDelay:250,scrollZoom:!1}).refresh()}).catch(s=>console.log(s)).finally(()=>t.loaderEl.classList.add("visually-hidden"))}
//# sourceMappingURL=index.js.map
