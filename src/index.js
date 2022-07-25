/**
 * Build styles
 */
require('./index.css').toString();

/**
 * Button Tool for the Editor.js
 *
 * Allows to add a button.
 */
class Button {
	/**
	 * Returns true to notify the core that read-only mode is supported
	 *
	 * @return {boolean}
	 */
	static get isReadOnlySupported() {
		return true;
	}

	/**
	 */
	constructor({data, api, block}) {
    this.data = data || {};
    this.api = api;
    this.block = block

    this.CSS = {
      container: "cdx-container",
      checkbox: "cdx-checkbox",
    };
	}

  /**
   * Create Input field
   * @param id
   * @param type
   * @param inputLabel
   * @param inputPlaceholder
   * @return {HTMLElement}
   * @private
   */
  createInput(id, type, inputLabel, inputPlaceholder) {
    const inputWrapper = document.createElement('div');
    const label = document.createElement('label')
    const input = document.createElement('input');

    input.type = type;
    input.placeholder = inputPlaceholder;
    input.id = id;

    if (type === 'checkbox') {
      input.classList.add(this.CSS.checkbox)
      input.checked = this.data && this.data[id] ? this.data[id] : false;
      input.addEventListener('click', () => {
        this.block.save().then((state) => {
          this.api.blocks.update(state.id, state.data);
        });
      })
    } else {
      input.classList.add(this.api.styles.input);
      input.value = this.data && this.data[id] ? this.data[id] : '';
    }

    label.innerText = inputLabel;
    inputWrapper.appendChild(label);
    inputWrapper.appendChild(input);

    return inputWrapper;
  }

  /**
	 * Create button element for Toolbar
	 *
	 * @return {HTMLElement}
	 */
	render() {
    const wrapper = document.createElement('div');
    const urlInput = this.createInput('url', 'text', this.api.i18n.t('Url label'), this.api.i18n.t('Url placeholder'))
    const labelInput = this.createInput('label', 'text', this.api.i18n.t('Button label'), this.api.i18n.t('Button placeholder'))
    const targetBlankCheckbox = this.createInput('targetBlank', 'checkbox', this.api.i18n.t('Checkbox label'), '')

    wrapper.classList.add('cdx-personality', this.api.styles.block, this.CSS.container)
    wrapper.appendChild(urlInput);
    wrapper.appendChild(labelInput);
    wrapper.appendChild(targetBlankCheckbox);
    return wrapper;
  }

	/**
	 *
	 * @param block
	 * @returns {{label: string, url: string}}
	 */
	save(block){
    const url = block.querySelector('#url');
    const label = block.querySelector('#label');
    const targetBlank = block.querySelector('#targetBlank');
    return {
      url: url.value,
      label: label.value,
      targetBlank: targetBlank.checked,
    }
	}

	/**
	 * Get Tool toolbox settings
	 * icon - Tool icon's SVG
	 * title - title to show in toolbox
	 *
	 * @return {{icon: string, title: string}}
	 */
	static get toolbox() {
		return {
			icon: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 512 512" height="20" viewBox="0 0 512 512" width="20"><path d="m237.102 366v-90.018h-90c-11.046 0-20-8.954-20-20s8.954-20 20-20h90v-90.982c0-11.046 8.954-20 20-20s20 8.954 20 20v90.982h90c11.046 0 20 8.954 20 20s-8.954 20-20 20h-90v90.018c0 11.046-8.954 20-20 20s-20-8.954-20-20zm254.898-15c11.046 0 20-8.954 20-20v-251c0-44.112-35.888-80-80-80h-352c-44.112 0-80 35.888-80 80v352c0 44.112 35.888 80 80 80h352c44.112 0 80-35.888 80-80 0-11.046-8.954-20-20-20s-20 8.954-20 20c0 22.056-17.944 40-40 40h-352c-22.056 0-40-17.944-40-40v-352c0-22.056 17.944-40 40-40h352c22.056 0 40 17.944 40 40v251c0 11.046 8.954 20 20 20z"/></svg>',
			title: 'Button'
		};
	}
}

module.exports = Button;
