import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="main">
      <h1 class="main_title">Welcome to the NG13 Demo</h1>
      <p class="main_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, libero voluptates,
        consectetur
        saepe consequuntur asperiores at fugit facilis odio numquam dignissimos maiores error sunt vitae labore! Porro
        quaerat soluta beatae?
        Esse laudantium quidem fugiat ipsa alias fuga voluptas doloremque natus sit, delectus, explicabo adipisci accusamus
        molestiae nihil! Doloremque, cumque omnis? Excepturi, quos sunt! Dicta repellendus alias non, neque aspernatur cum.
        At exercitationem ex temporibus libero necessitatibus debitis! Iste ex aliquam placeat at distinctio? Deleniti dicta
        officia consequuntur accusamus, debitis dolorum quod nesciunt impedit sunt exercitationem voluptas soluta
        repudiandae facere. Impedit.
        Amet ipsam doloribus ab accusamus modi! Ipsum hic unde tempora iusto asperiores delectus! Perferendis quia deleniti
        pariatur tenetur eveniet, sed doloremque praesentium corrupti officia sapiente excepturi animi libero velit debitis.
        Dolorem perferendis blanditiis sunt pariatur deserunt architecto minus, asperiores amet, adipisci error consectetur
        quisquam corrupti iure in debitis mollitia saepe tempore dolor eum? Pariatur, quaerat consectetur natus ad
        necessitatibus aperiam.
        <br>
        <br>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus sed ducimus voluptatem eaque modi neque
        quos aliquam tenetur accusantium amet cum quibusdam dolore consequatur distinctio magnam nemo, sit molestiae!
        Fugiat, odit dolores neque deserunt magni reprehenderit expedita, animi ipsam nam labore aspernatur eos praesentium
        nihil, provident at ipsum aut rerum blanditiis magnam dolorem ducimus cum laborum adipisci non. Explicabo?
        Perferendis libero, officia repellat corporis molestias a sunt incidunt! Laborum, ratione possimus. Voluptatum,
        dolores suscipit aliquid temporibus in eius autem accusamus, et dolorum, quam est pariatur quidem ad perspiciatis
        impedit.
      </p>
    </section>
  `,
  styles: [`
    .main {
      &_title {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }

      &_description {
        font-size: 1.25rem;
        line-height: 1.5;
      }
    }
  `]
})
export class HomeComponent {}
