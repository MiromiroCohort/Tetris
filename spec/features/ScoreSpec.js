describe("Scores", function(){

  it("is a string", function(){
    expect(testVar).toEqual("a string");
  })

  describe("addNewScore", function(){

    it("is defined", function(){
      expect(addNewScore(50)).toBe()
    })

  })
  // beforeEach(function() {
  //   addNewScore(50);
  // })

  // it("outputs JSON", function(){
  //   expect(latestScoreReceiver).toEqual(50);
  // })
  // beforeEach(function() {
  //     jasmine.Ajax.install();
  //   });

  // afterEach(function() {
  //     jasmine.Ajax.uninstall();
  //   });

  // it("specifying response when you need it", function() {
  //     var doneFn = jasmine.createSpy("success");

  //     var xhr = new XMLHttpRequest();
  //     xhr.onreadystatechange = function(args) {
  //       if (this.readyState == this.DONE) {
  //         doneFn(this.responseText);
  //       }
  //     };

  //     xhr.open("GET", "/help");
  //     xhr.send();

  //     expect(jasmine.Ajax.requests.mostRecent().url).toBe('/some/cool/url');
  //     expect(doneFn).not.toHaveBeenCalled();

  //     jasmine.Ajax.requests.mostRecent().response({

  //       "status": 200,
  //       "contentType": 'application/json',
  //       "responseText": 'awesome response'
  //     });

  //     expect(doneFn).toHaveBeenCalledWith('awesome response');
  //   });


  // it("should receive a JSON object", function(){
  //   $.httpBackend.expectGET('/help').respond(Object Literal)
  // })


});
