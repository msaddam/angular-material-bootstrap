import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

import { Feature, features } from '../feature-list.data';

import { AnimationsService } from '../../../core/animations/animations.service';

@Component({
  selector: 'anms-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureListComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  features: Feature[] = features;

  constructor(private animationsService: AnimationsService) {

  }

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
  add() {
    this.features.push({
      description: "anms.features.angular",
      documentation: "https://angular.io/docs/ts/latest/",
      github: "https://github.com/angular/angular",
      name: "Angular",
      version: "~8.0.0"
    });

    this.animationsService.updateRouteAnimationType(true, true);
    
    console.log()
  }
}
