import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoItem } from '../videos/video';
import { VideoService } from '../videos/videos.service';
import { PageEvent } from '@angular/material';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService]
})
export class VideoListComponent implements OnInit, OnDestroy {
    private req: any;
    title = 'Video List';
    query: string;
    private routeSub: any;
    videoList: [VideoItem];
  // tslint:disable-next-line: variable-name
  constructor(private _video: VideoService, private route: ActivatedRoute) {
    this.routeSub = route.params.subscribe(params => {
      console.log(params);
      this.query = params.q;
  });
  }

  ngOnInit() {
    this.req = this._video.list().subscribe(data => {
    this.videoList = data as [VideoItem];
    });

  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

}
