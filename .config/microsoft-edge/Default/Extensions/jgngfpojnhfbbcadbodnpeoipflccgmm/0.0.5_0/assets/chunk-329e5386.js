chrome.runtime.onMessage.addListener(e=>{e.hasOwnProperty("Link")&&setTimeout(()=>{var t;document.getElementById("sharelink")||(t=document.querySelector('div[role="tablist"]'))==null||t.insertAdjacentHTML("beforeend",`
          <button type role="none" id="sharelink" class="cds-105 cds-181 cds-183 css-10f3885">
              <a role="tab" aria-selected="false" class="tab-link" onclick="event.preventDefault(); navigator.clipboard.writeText('${e.Link}').then(() => { alert('Link copied to clipboard!!!'); }).catch((error) => { alert('Failed to copy link to clipboard:', error); });">
                  <span class="tab-text">Share</span>
              </a>
          </button>
          `)},1e3)});
