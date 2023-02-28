import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[HideComponent]'
})
export class HideComponentDirective implements OnInit{
  hoverColor = 'yellow';
  @Input('HideComponent')
  set setHideComponent(HideComponent:boolean){
    this.HideComponent = HideComponent
    this.applyStyle()
  }
  HideComponent:boolean = true

  defaultStyle:string = ''

  @Input()
  color= 'red'
  constructor(private tag:ElementRef, private renderer:Renderer2) {
  }

  ngOnInit(): void {
    this.applyStyle()
    //this.tag.nativeElement.style.color = 'blue'
    this.renderer.setStyle(this.tag.nativeElement,'background-color',this.color)



  }
  applyStyle(){

    if(this.HideComponent){

      this.tag.nativeElement.style.display = 'none'
    }
    else{

      this.tag.nativeElement.style.display = this.defaultStyle
    }
  }

  @HostListener('mouseenter')
  HandleMouseEnter(){
    //this.tag.nativeElement["backgroundColor"]= this.hoverColor
    this.renderer.setStyle(this.tag.nativeElement,'background-color',this.hoverColor)
  }

  @HostListener('mouseleave')
  HandleMouseLeave(){
    //this.tag.nativeElement["backgroundColor"]= this.color
    this.renderer.setStyle(this.tag.nativeElement,'background-color',this.color)
  }
}
