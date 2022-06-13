import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgtGLTFLoader} from '@angular-three/soba/loaders';
import type {GLTF} from 'three-stdlib/loaders/GLTFLoader';
import type {NgtObjectMap, NgtTriple} from '@angular-three/core';
import gsap from 'gsap';

@Component({
  selector: 'iconic-homepages-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('container', {static: true})
  container!: ElementRef<HTMLDivElement>;

  animation?: GLTF & NgtObjectMap;
  lightPosition = {
    x: -3,
    y: 3,
    z: 7,
  };

  get lightPositionTriple(): NgtTriple {
    const {x, y, z} = this.lightPosition;
    return [x, y, z];
  }

  constructor(
    private loader: NgtGLTFLoader,
    private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.loader
      .load('assets/assunta-valentino_airpods-liv-1.gltf')
      .subscribe((gltf: any) => {
        const node = gltf.nodes['Oggetto_1'];
        node.material.metalness = 0.9;
        node.material.roughness = 0;
        this.animation = gltf;
      });
  }

  ngAfterViewInit() {
    const st = gsap.timeline({
      scrollTrigger: {
        trigger: this.container.nativeElement,
        start: 'top top',
        end: 'bottom center',
        scrub: 1,
        snap: {
          snapTo: 'labels',
          duration: {min: 0.2, max: 3},
          delay: 0.2,
          ease: 'power1.inOut',
        },
        onUpdate: () => {
          this.cdRef.detectChanges();
        }
      },
    });

    st.to(this.lightPosition, {x: 0, y: 0, z: -1});

  }

}
