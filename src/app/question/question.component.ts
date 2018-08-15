import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
	public question:Array<Object> = [
      {
		id: 1, question: "Full Form of PHP ?", category: "programming", 
		subs: ['Hyper-text Pre Processor','Hyper Pre Processor','Home Page Processor']
	  },
	  
      {
		  id: 2, question: "Full Form of MS ?", category: "programming", 
		  subs: ['Micro-Soft','Micro-Stage','Micro-System']
	  },
	  {	  id: 3, question: "Short-Cut for search popup window ?", category: "Operating System",
		  subs: ['Ctrl+S','Ctrl+F','Window+R']
	  },
	  {
		  id: 4, question: "Short-Cut for paint in window search?", category: "Operating System", 
		  subs: ['mspaint','paint','Ctrl+P']
	  },
	  {
		  id: 5, question: "Short-Cut for console in window search?", category: "Operating System", 
		  subs: ['cmd','console','window+cmd']
	  },
	  {
		  id: 6, question: "Short-Cut for notepad in window search?", category: "Operating System", 
		  subs: ['msnotepad','notepad','window+N']
	  },
            
	];
	public answer:Array<String> = ['Hyper-text Pre Processor','Micro-Soft','Window+R','mspaint','cmd','notepad'];
	public quiz_answer:Array<String> = [];
	is_start:boolean=true;
	current_index=0;
	min=0;
	sec=0;
	interval:Number;
	finish_message:String;
	constructor(){ }
	ngOnInit(){		
			// this.counter();		
	}
	start_quiz()	
	{
		this.counter();	
		this.is_start=false;
	}
	question_index(index){
		if(this.current_index==index){
			return true;
		}else{
			return false;
		}
	}
	counter(){		
	this.interval=	setInterval(()=> {
		if(this.sec=='60'){
			// console.log('20:'+this.sec);
			this.min++;
			this.sec=0;
		}
		if(this.min=='2'){
			clearInterval();
			this.next_question(this.current_index,'');			
			this.min=0;
		}		
		this.sec++;
		},1000);
	}
	next_question(key,ans){		
		if(ans){
			this.quiz_answer.push(ans);
		}else{
			ans='';
			this.quiz_answer.push(ans);
		}
		this.min=0;this.sec=0;
		this.current_index++;
		if(this.current_index==this.question.length){
			this.final_result();
		}
	}
	get_correctAnswers(a, b) {
		var matches = [];
		for ( var i = 0; i < a.length; i++ ){
			for (var e = 0; e < b.length; e++){
				if (a[i] === b[e]) matches.push( a[i] );
			}
		}
		return matches;
	}
	final_result(){
		var matches=this.get_correctAnswers(this.answer,this.quiz_answer);
		
		if(matches.length==4){
			this.finish_message="Congratulation you have scored 80% marks";
		}
		if(matches.length>4){
			this.finish_message="Congratulation you have scored 100% marks";
		}
		if(matches.length==3){
			this.finish_message="Congratulation you have scored 60% marks";
		}
		if(matches.length<3){
			this.finish_message="Sorry you have failed the test";
		}
		
		if (this.interval) {
		   clearInterval(this.interval);
		}
	}

}
