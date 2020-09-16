import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  data: any = [{

    imageUrl: "../../assets/1.jpeg",
    itemText: "How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?",
    likes: 57,
    chat: 6,
    eye: 138
  },
  {

    imageUrl: "../../assets/2.jpeg",
    itemText: "How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?",
    likes: 57,
    chat: 6,
    eye: 138
  },
  {

    imageUrl: "../../assets/3.jpeg",
    itemText: "How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?",
    likes: 57,
    chat: 6,
    eye: 138
  },
  {

    imageUrl: "../../assets/1.jpeg",
    itemText: "How did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?",
    likes: 57,
    chat: 6,
    eye: 138
  }




]

}
