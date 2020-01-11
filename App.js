/**
 * React Native Music App to test the react-video module for streaming
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import Player from './app/Player';

export const TRACKS = [
  {
    title: 'Previously Unpublished Poems',
    artist: 'Miguel Pinero',
    albumArtUrl: "/Users/alejandrogonzales/Development/MyProjects/React-Native/ReactMusic/img/migueloutlaw.jpg",
   	audioUrl: "https://euums.baseservers.com/abantuaudio/mp4:01_Outlaw_La Bodega Sold Dreams.mp4/playlist.m3u8", 
  },
  {
    title: 'La Bodega Sold Dreams',
    artist: 'Miguel Pinero',
    albumArtUrl: "https://storage.googleapis.com/abantuaudio-bucket/Books/Outlaw/Images/migueloutlaw.jpg",
    audioUrl: "https://euums.baseservers.com/abantuaudio/mp4:02_Outlaw_Previously Unpublished Poems.mp4/playlist.m3u8", 
  },
  {
    title: 'The Guntower',
    artist: 'Miguel Pinero',
    albumArtUrl: "https://storage.googleapis.com/abantuaudio-bucket/Books/Outlaw/Images/migueloutlaw.jpg",
    audioUrl: "https://euums.baseservers.com/abantuaudio/mp4:04_Outlaw_The Guntower.mp4/playlist.m3u8", 
  },
];

export default class App extends Component {
  render() {
    let tracks_len = TRACKS.length; 
	console.log("TRACKS (len = " + tracks_len + "):");
	for (var i = 0; i < tracks_len; i++) {
	 	var audio = TRACKS[i].audioUrl;
		var encode = audio.replace(/ /g, "%20"); 
		TRACKS[i].audioUrl = encode;	
		console.log(encode);
	}
    console.log("\n"); 
	return <Player tracks={TRACKS} />
  }
}

