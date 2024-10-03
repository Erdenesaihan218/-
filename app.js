//Delgetstei ajillah controller
var uiController = (function (){
    
})();
//sanhuutei ajillah controller
var financeController = (function (){
    
})();
//holboh controller
var appController = (function (uiController, financeController) {
    var ctrlAddItem = function () {
          //1. Oruulah ogogdliig delgetsees olno.

        //2. Olj awsan ogogdluudee sanhuugiin controller damjuulj tend hadgalna.

        //3. Olj awsan ogogdluudiig web deeree tohiroh hesegt n gargana.

        //4. Tusuwiig tootsoolno.

        //5. Etsesiin uldegdel tootsoog delgetsend gargana.
    }
    document.querySelector('add__btn').addEventListener('Click',function(){
      ctrlAddItem();
    });
    document.addEventListener('keypress', function (event) {
        if(event.key === 13 || event.which === 13) {

        }
    });
})(uiController, financeController);