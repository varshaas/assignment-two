import { Component } from '@angular/core';

@Component({
	selector: 'app-binding',
	templateUrl: './binding.component.html',
	styleUrls: ['./binding.component.css']
})

export class BindingComponent{
	username = 'tert';
	allowClick = '';
	noText = false;
	
	constructor(){
	}

	onUpdateUserName(event){
		console.log(event.target.value);
		this.username = event.target.value;
		if (this.username) {
			console.log("Not Empty");
			this.noText = false;
		}
		else{
			console.log("Empty");
			this.noText = true;
		}
	}

	resetText(){
		this.username = '';
		this.noText = true;
	}
}