
class HeaderPage {
    /**
     * define selectors using getter methods
     */
    get headerPage () {
        return $('[class="dls-title"]');
    }
}
module.exports = new HeaderPage();
