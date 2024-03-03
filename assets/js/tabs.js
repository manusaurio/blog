const toggleTab = (tabs, tabContents, activeId) => {
  for (const tab of tabs) {
    if (tab.dataset.tabId === activeId)
      tab.classList.add('is-active')
    else
      tab.classList.remove('is-active')
  }

  for (const tabContent of tabContents) {
    if (tabContent.dataset.tabId === activeId)
      tabContent.classList.remove('is-hidden')
    else
      tabContent.classList.add('is-hidden')
  }
}

const tabGroups = document.querySelectorAll('[id^="tabbed-"]')

for (const tabGroup of tabGroups) {
  const tabs = tabGroup.querySelector('.tabs')
    .querySelectorAll('[data-tab-id]')
  const tabContents = tabGroup.querySelectorAll('.tabbed')

  for (const tab of tabs) {
    const anchorElement = tab.querySelector('a');

    const triggerToggleTab = () => toggleTab(
      tabs,
      tabContents,
      tab.dataset.tabId,
    )

    anchorElement.addEventListener(
      'click',
      triggerToggleTab,
    )

    anchorElement.addEventListener(
      'keydown',
      (e) => {
        if (e.key === 'Enter') triggerToggleTab()
      },
    )
  }
}
