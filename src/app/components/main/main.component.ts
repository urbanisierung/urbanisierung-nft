import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { SkunkWorksNft } from '../../constants/SkunkWorksNft.constant'
import { NftType } from '../../types/nft.type'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  nft: NftType | undefined
  email: FormControl = new FormControl('', [Validators.email])

  constructor() {
    this.nft = SkunkWorksNft
  }

  // eslint-disable-next-line class-methods-use-this
  subscribe() {
    window.open(
      `https://tinyletter.com/urbnft`,
      'popupwindow',
      'scrollbars=yes,width=800,height=600'
    )
  }
}
