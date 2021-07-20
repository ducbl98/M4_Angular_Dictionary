import {Injectable} from '@angular/core';
import {Word} from "../model/word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  words: Word[] = [
    {
      word: 'apple',
      mean: 'táo',
    },
    {
      word: 'orange',
      mean: 'cam',
    },
    {
      word: 'grape',
      mean: 'nho',
    },
    {
      word: 'pomelo',
      mean: 'bưởi',
    },
    {
      word: 'strawberry',
      mean: 'dâu',
    },
    {
      word: 'papaya',
      mean: 'đu đủ',
    },
    {
      word: 'pineaaple',
      mean: 'dứa',
    },
    {
      word: 'peach',
      mean: 'đào',
    },
    {
      word: 'watermelon',
      mean: 'dưa hấu',
    },
    {
      word: 'cantaloupe',
      mean: 'dưa lưới',
    },
  ];

  constructor() {
  }
  getAll(){
    return this.words;
  }
  saveWord(word : Word):void{
    this.words.push(word);
  }

}
