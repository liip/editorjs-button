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
	 * Class name for term-tag
	 *
	 * @type {string}
	 */
	static get CSS() {
		return 'small';
	};

	/**
	 */
	constructor({api}) {
		this.api = api;

		/**
		 * Toolbar Button
		 *
		 * @type {HTMLElement|null}
		 */
		this.button = null;

		/**
		 * Tag represented the term
		 *
		 * @type {string}
		 */
		this.tag = 'SPAN';

		/**
		 * CSS classes
		 */
		this.iconClasses = {
			base: this.api.styles.inlineToolButton,
			active: this.api.styles.inlineToolButtonActive
		};

		this._data = {};
		this.data = data;
	}

	/**
	 * Create button element for Toolbar
	 *
	 * @return {HTMLElement}
	 */
	render() {
		this.button = document.createElement('button');
		this.button.type = 'button';
		this.button.classList.add(this.iconClasses.base);
		this.button.innerHTML = this.toolboxIcon;

		return this.button;
	}


	/**
	 *
	 * @param block
	 * @returns {{label: string, url: string}}
	 */
	save(block){
		return this._data;
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
			icon: require('./../assets/icon.svg').default,
			title: 'Inverted Delimiter'
		};
	}

	/**
	 * Sanitizer rule
	 * @return {{span: {class: string}}}
	 */
	static get sanitize() {
		return {
			span: {
				class: InlineSmall.CSS
			}
		};
	}
}

module.exports = Button;
