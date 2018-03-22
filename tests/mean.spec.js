const expect = require('chai').expect;
const {
  process,
  textSanitation,
  textValidation,
  createlinkedList,
  getMean,
  getDeviation} = require('../src/process');
const { Node, List } = require('../src/LinkedList');


describe('#process', function () {

  describe('#getDeviation', function() {
    it('Should get the correct deviation', function(){
          let array = [1,2,3];
          let result= getDeviation(array,2,3);
          expect(result).to.eql(1);
      });
    });


    describe('#createlinkedList', function() {
      it('Should create a LinkedList', function(){
          let array =[1,2];
          let list= List();
          let node= Node(1);
          let node2= Node(2);
          list.add(node);
          list.add(node2);
          let list1 = createlinkedList(array);
          expect(list1.head).to.eql(list.head);
          expect(list1.length).to.eql(list.length);
          expect(list1.tail).to.eql(list.tail);
      });
    });

    describe('#validation', function() {
      it('validation should return error message if the text does not meet the requirements', function(){
          let text = '';
          let errormessage = textValidation(text);
          expect(errormessage).to.equal('no input specified');
      });

      it('validation should return error message if the text does not meet the requirements', function(){
          let text = "5,6,g,]";
          let errormessage = textValidation(text);
          expect(errormessage).to.equal('you can only enter numbers and a special letter: ,');
      });
    });

    describe('#sanitation', function() {
      it('sanitation should trim whitespaces and jumplines', function(){
         let text = "1 , 2,\n3";
         let result = textSanitation(text);
         expect(result).to.equal('1,2,3');
      });

      it('sanitation should trim repeated comas', function(){
         let text = "1,,2,,3";
         let result = textSanitation(text);
         expect(result).to.equal('1,2,3');
      });

      it('sanitation should trim comas in the end', function(){
         let text = "1,2,3,,,, ";
         let result = textSanitation(text);
         expect(result).to.equal('1,2,3');
      });
    });

    describe('#Text', function () {

      it('process Should return a message when There is no text', function () {
          let text = '';
          let result = process(text);
          expect(result).to.equal('no input specified');
      });

      it('process Should return a message when the user input cointains a letter', function () {
          let text = '2,3,a'
          let result = process(text);
          expect(result).to.equal('you can only enter numbers and a special letter: ,');
        });

        it('process should return the right mean, even if the string is malformed', function () {
            let text = '1 ,2, ,3,';
            let result = process(text);
            expect(result.mean).to.equal(2);
        });

    });

    describe('#getMean', function() {
      it('Should get the correct mean', function(){
          let array =[1,2,3];
          let result = getMean(array);
          expect(result.mean).to.equal(2);
          expect(result.counter).to.equal(3);
        });
    });

    describe('#mean', function () {

        it('process should return a mean with value 2', function () {
            let text = '1,2,3';
            let result = process(text);
            expect(result.mean).to.equal(2);
        });

    });

    describe('#Standar deviation', function () {

        it('process should return a deviation of 1 (example 1)', function () {
            let text = '1,2,3';
            let result = process(text);
            expect(result.deviation).to.equal(1);
        });

        it('process should return a deviation of 3.30... (example 2)', function () {
            let text = '4,9,2,8';
            let result = process(text);
            expect(result.deviation).to.equal(3.304037933599835);
        });
    });

    describe('#LinkedListProcess', function () {

        it('process should return a linked list', function () {
            let text = '3,2,4';
            let listlink = {
                data: '3',
                next: {
                    data: '2',
                    next: {
                        data: '4',
                        next: null
                    }
                }
            }

            let result = process(text);
            expect(result.list.head).to.eql(listlink);
        })
    });
});

describe('#LinkedList()', function () {

    it('Node should return a node', function () {
        let digit = 5;
        let node = Node(digit);
        expect(node.data).to.equal(digit);
        expect(node.next).to.equal(null);
    });

    it('List should return a list', function () {
        let list = List();
        expect(list.length).to.equal(0);
        expect(list.head).to.equal(null);
        expect(list.tail).to.equal(null);
    });

    it('List should add a node on an empty list', function () {
        let list = List();
        let node = Node(6);
        list.add(node);

        expect(list.length).to.equal(1);
    });

    it('List should add a node on a list with a length greater than 0', function () {
        let list = List();
        let node1 = Node(6);
        let node2 = Node(3);
        list.add(node1);
        list.add(node2);
        //console.log(list);
        expect(list.length).to.equal(2);
        expect(list.tail).to.eql(node2);
        expect(list.head).to.eql(node1);

    });
});
