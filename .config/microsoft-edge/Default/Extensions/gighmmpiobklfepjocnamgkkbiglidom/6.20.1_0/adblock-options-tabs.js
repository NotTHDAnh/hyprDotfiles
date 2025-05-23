/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, License, localizePage, determineUserLanguage, getStorageCookie, setStorageCookie,
   THIRTY_MINUTES_IN_MILLISECONDS, checkForUnSyncError, addUnSyncErrorClickHandler, translate,
   splitMessageWithReplacementText, setLangAndDirAttributes, storageSet, storageGet,
   initializeProxies, ServerMessages, settings:true, */

const userSeenNewPFPageKey = "options_menu_pf_key";
let userSeenNewPFPage = storageGet(userSeenNewPFPageKey);

const syncMessageContainer = '<div class="sync-message-container"></div>';

const syncMessageDiv = `
  <div class="sync-header-message sync-message-hidden">
    <div class="sync-message-box">
      <i class="material-icons md-24 sync-icon" role="img" aria-hidden="true"></i>
      <span class="sync-header-message-text"></span>
    </div>
  </div>`;

const unsyncMessageDiv = `
<div class="unsync-header sync-message-hidden">
  <span class="sync-message-error" id="unsync-message-box-close">
    <i class="material-icons md-24" role="img" >close</i>
  </span>
  <div class="unsync-header-message sync-message-error">
    <div class="unsync-message-box">
      <i class="material-icons md-24" role="img" aria-hidden="true">error</i>
      &nbsp;
      <span i18n="unsync_error_msg_part_1"></span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span i18n="unsync_error_msg_part_2"></span>
      &nbsp;&nbsp;
      <span i18n="sync_removed_error_msg_part_2" class="sync-message-link"></span>
    </div>
  </div>
</div>`;

const unsyncErrorMsgPart3 = splitMessageWithReplacementText(
  browser.i18n.getMessage("unsync_error_msg_part_3"),
);
const unsyncMessageDivSyncTab = `
<div class="unsync-header sync-message-hidden">
  <span class="sync-message-error" id="unsync-message-box-close-sync-tab">
    <i class="material-icons md-24" role="img" >close</i>
  </span>
  <div class="unsync-header-message sync-message-error">
    <div class="unsync-message-box">
      <i class="material-icons md-24" role="img" aria-hidden="true">error</i>
      &nbsp;
      <span id="sync-reload-page-message">${translate("unsync_error_msg_part_1")}&nbsp;&nbsp;&nbsp;${translate("unsync_error_msg_part_2")}&nbsp;&nbsp;&nbsp;${unsyncErrorMsgPart3.anchorPrefixText}<span class="sync-message-link">${unsyncErrorMsgPart3.anchorText}</span>${unsyncErrorMsgPart3.anchorPostfixText}</span>
    </div>
  </div>
</div>`;

function getSyncOutOfDateMessageDiv(id) {
  return `
  <div class="sync-out-of-date-header-message sync-message-hidden sync-message-error">
    <div class="sync-message-box">
      <i class="material-icons md-24" role="img" aria-hidden="true">error_outline</i>
      <span i18n="sync_message_old_version_part_1"></span>&nbsp;
      <a i18n="sync_message_old_version_part_2" i18n_replacement_el="oldversionlink_${id}"
      href="https://help.getadblock.com/support/solutions/articles/6000087857-how-do-i-make-sure-adblock-is-up-to-date-" target="_blank"> <span id="oldversionlink_${id}" class="sync-message-link"></span> </a>
    </div>
  </div>`;
}

function showNewIcon() {
  $("#pfIcon").fadeOut();
  $("#new-pf-icon").fadeIn();
  $("#pf-menu-item").addClass("newItem");
}

function showPFIcon() {
  $("#pfIcon").fadeIn();
  $("#new-pf-icon").fadeOut();
  $("#pf-menu-item").removeClass("newItem");
}

function hideBothIcons() {
  $("#pfIcon").fadeOut();
  $("#new-pf-icon").fadeOut();
  $("#pf-menu-item").removeClass("newItem");
}

function checkWindowWidth() {
  const currentWidth = $(window).width();
  const minimumWindowWidthFullMenu = 871;
  if (!userSeenNewPFPage) {
    showNewIcon();
  } else if (currentWidth <= minimumWindowWidthFullMenu) {
    if (!userSeenNewPFPage) {
      showNewIcon();
    } else {
      showPFIcon();
    }
  } else {
    hideBothIcons();
  }
}

function shouldShowDCNewIcon() {
  if (!userSeenNewPFPage) {
    window.addEventListener("resize", checkWindowWidth);
    checkWindowWidth();
  }
}

function checkPFNewIcon(tabID) {
  if (tabID === "#premium-filters") {
    userSeenNewPFPage = true;
    storageSet(userSeenNewPFPageKey, userSeenNewPFPage);
    checkWindowWidth();
  }
}

// Output an array of all tab ids in HTML
function allTabIDs() {
  return $(".tablink")
    .map(function getTabId() {
      return $(this).attr("href");
    })
    .get();
}

// Inputs:
//    - tabID -- string (tab ID to activate)
// Output:
//    - tabID -- string (valid tab ID to activate)
function validateTabID(tabID) {
  if (!tabID || !allTabIDs().includes(tabID)) {
    return "#general";
  }
  return tabID;
}

// Load tab panel script in the document when the tab is
// activated for the first time.
// Inputs: $activeTabPanel -- jQuery Object
function loadTabPanelScript($activeTabPanel) {
  const activePanelID = $activeTabPanel.attr("id");
  const scriptToLoad = `adblock-options-${activePanelID}.js`;
  const scriptTag = document.createElement("script");
  const alreadyLoaded = $(`script[src='${scriptToLoad}']`).length > 0;

  if (alreadyLoaded) {
    return;
  } // don't load the same script twice

  // Don't use $().append(scriptTag) because CSP blocks eval
  scriptTag.src = scriptToLoad;
  document.body.appendChild(scriptTag);
}

// Display tabs and panel based on the current active tab
// Inputs: $activeTab - active tab jQuery object
function displayActiveTab($activeTab) {
  const $activeTabPanel = $($activeTab.attr("href"));
  loadTabPanelScript($activeTabPanel);
  $activeTabPanel.show();
  if (document.readyState === "complete") {
    setLangAndDirAttributes();
  }
}

function activateTab(tabHref) {
  const tabID = validateTabID(tabHref);
  const $activeTab = $(`.tablink[href='${tabID}']`);
  const $allTabs = $(".tablink");
  const $allTabPanels = $(".tab");

  $allTabs.removeClass("active");
  $allTabPanels.hide();

  $activeTab.addClass("active");

  setStorageCookie("active_tab", $activeTab.attr("href"), THIRTY_MINUTES_IN_MILLISECONDS);

  displayActiveTab($activeTab);

  checkPFNewIcon(tabID);
}

// displayMABFeedbackCTA checks if the user has set their language to english and
// displays the feedback call to action on Premium related options pages:
//
// Premium
// Premium - Themes
// Premium - Image Swap
// Premium - Sync
const displayMABFeedbackCTA = function () {
  const lang = determineUserLanguage();
  if (lang === "en" || lang.startsWith("en")) {
    $("footer.myadblock_feedback_footer").css("display", "flex");
    const $feedbackButton = $(".mab-feedback-button, #support-feedback-button");
    $feedbackButton.on("click", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      let url = "https://portal.productboard.com/getadblock/4-adblock-extension";
      if (License.isActiveLicense()) {
        url = "https://portal.productboard.com/getadblock/5-adblock-extension-premium";
      }
      browser.tabs.create({ url });
      $feedbackButton.trigger("blur");
    });
  }
};

const hideAdvancedOptionsWhenNeeded = function () {
  if (!settings.show_advanced_options) {
    $(".advanced").hide();
  }
};

// Load all HTML templates in respective tab panels
// and translate strings on load completion
function loadTabPanelsHTML() {
  const $tabPanels = $("#tab-content .tab");
  let tabsLoaded = 1; // track the tabs that are loaded
  $.each($tabPanels, (i, panel) => {
    const $panel = $(panel);
    const panelID = $(panel).attr("id");

    const panelHTML = `adblock-options-${panelID}.html`;
    $panel.load(panelHTML, () => {
      if ($panel.find(".sync-message-container").length === 0) {
        $panel.prepend(syncMessageContainer);
      }
      const $messageContainer = $panel.find(".sync-message-container");
      $messageContainer.prepend(getSyncOutOfDateMessageDiv(i));
      if ($panel.attr("syncMessageDiv")) {
        $messageContainer.prepend(syncMessageDiv);
      }
      if ($panel.attr("unsyncMessageDiv")) {
        $messageContainer.prepend(unsyncMessageDiv);
      }
      if ($panel.attr("unsyncMessage2Div")) {
        $messageContainer.prepend(unsyncMessageDivSyncTab);
      }
      localizePage();
      document.documentElement.classList.add(
        `manifest-v${browser.runtime.getManifest().manifest_version}`,
      );
      tabsLoaded += 1;
      if (tabsLoaded >= $tabPanels.length) {
        // all tabs have been loaded and localized - call
        // any post processing handlers here.
        displayMABFeedbackCTA();
        checkForUnSyncError();
        addUnSyncErrorClickHandler();
        shouldShowDCNewIcon();
        hideAdvancedOptionsWhenNeeded();
      }
    });
  });
}

// Get active tab ID from cookie or URL hash and activate tab
// and display the tabs and tabel accordingly
function activateTabOnPageLoad() {
  // Set active tab from cookie
  let activeTabID = getStorageCookie("active_tab");

  // Set active tab from hash (has priority over cookie)
  if (window.location && window.location.hash) {
    [activeTabID] = window.location.hash.split("_");
  }
  activateTab(activeTabID);
}

function getFormattedTabName() {
  return $(".tablink.active span").parent().attr("href").replace("#", "").replace(/-/g, "_");
}

$(async () => {
  await initializeProxies();
  // 1. load all the tab panels templates in respective panel DIVs
  loadTabPanelsHTML();

  // 2. hide the 'Premium' tab, if the Registry or Group Policy has requested it
  // Note: this check is done here to minimize the chance of the user
  //       seeing the Options menu change when the 'Premium' item is removed
  if (License.shouldShowPremiumCTA() === false) {
    $('#sidebar-tabs a[href="#mab"]').parent().hide();
  }

  // 3. Activate tab on page load with cookie, URL hash or default tabID
  activateTabOnPageLoad();

  // 4. Activate tab when clicked
  $(".tablink").on("click", function tabLinkClicked() {
    const tabID = $(this).attr("href");
    activateTab(tabID);
    ServerMessages.recordGeneralMessage(`options_page_tab_clicked_${getFormattedTabName()}`);
  });
  ServerMessages.recordGeneralMessage(`options_page_opened_tab_${getFormattedTabName()}`);

  // 5. Display CTA - a future library update will support
  // automatically injecting the CTA HTML as well.
  displayMABFeedbackCTA();
});
