import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { MockProductService } from '../../services/mock-product.service';

@Component({
  selector: 'app-product-detail-page',
  imports: [],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css'
})
export class ProductDetailPageComponent {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: MockProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>
    {
      let param = params.get("id");
      if ( param === null)
        return;

      let id = parseInt(param);
      let product = this.service.getProduct(id);
      if(product === null)
        return

      this.product = product;
    }
    )
  }

  goBack() {
    this.router.navigate(['products'])
  }


}
