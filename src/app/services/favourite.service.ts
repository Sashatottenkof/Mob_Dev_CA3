import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
const STORAGE_KEY = 'favouriteEpisodes';
const STORAGE_KEY2 = 'favouriteChar';
 
@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
 
  constructor(private storage: Storage) { }
 
  getAllFavouriteEpisodes() {
    return this.storage.get(STORAGE_KEY);
  }
 
  isFavourite(episodeId) {
    return this.getAllFavouriteEpisodes().then(result => {
      return result && result.indexOf(episodeId) !== -1;
    });
  }
 
  favouriteEpisode(episodeId) {
    return this.getAllFavouriteEpisodes().then(result => {
      if (result) {
        result.push(episodeId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [episodeId]);
      }
    });
  }
 
  unfavouriteEpisode(episodeId) {
    return this.getAllFavouriteEpisodes().then(result => {
      if (result) {
        var index = result.indexOf(episodeId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
  getAllFavouriteChars() {
    return this.storage.get(STORAGE_KEY2);
  }
 
  isFavouriteChar(charId) {
    return this.getAllFavouriteChars().then(result => {
      return result && result.indexOf(charId) !== -1;
    });
  }
 
  favouriteChar(charId) {
    return this.getAllFavouriteChars().then(result => {
      if (result) {
        result.push(charId);
        return this.storage.set(STORAGE_KEY2, result);
      } else {
        return this.storage.set(STORAGE_KEY2, [charId]);
      }
    });
  }
 
  unfavouriteChar(charId) {
    return this.getAllFavouriteChars().then(result => {
      if (result) {
        var index = result.indexOf(charId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY2, result);
      }
    });
  }
 
}