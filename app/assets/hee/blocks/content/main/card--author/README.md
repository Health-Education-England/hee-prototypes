# Author card

## Guidance

This card is used to display information about an author below content, usually on a blog post of news item.

If there is more than one author, the components should be wrapped by a container (see below), and will display the
authors at half width side by side (desktop).

## Quick start example

### Single author

#### HTML markup

```html
<div class="hee-card hee-card--author">
    <div class="hee-card--author__header">
      <div class="hee-card__image has-bg">
        <div class="hee-card__initials" style="background: url('/images/doctor-headshot.png')">
          <span>JB</span>
        </div>
      </div>
      <div class="hee-card--author__details">
        <h2 class="hee-card__name" aria-label="Name"> Mr First Last </h2>
        <span class="hee-card__pronouns">Pronoun</span>
        <h3 class="nhsuk-heading-m hee-card__jobtitle" aria-label="Job Title">Job title</h3>
        <p class="hee-card__department" aria-label="Department">Department</p>
        <p class="hee-card__organisation" aria-label="Organisation">Organisation</p>
      </div>
    </div>
    <ul class="hee-card__contact">
      <li class="hee-card__email hee-card__contact__item" aria-label="Email"><a href="mailto:jo.bloggs@hee.co.uk;">jo.bloggs@hee.co.uk</a></li>
      <li class="hee-card__website hee-card__contact__item" aria-label="Website"><a href="http://nhs.uk/">http://nhs.uk/</a></li>
      <li class="hee-card__linkedin hee-card__contact__item" aria-label="Linkedin"><a href="https://www.linkedin.com/company/nhs">nhs</a></li>
      <li class="hee-card__twitter hee-card__contact__item" aria-label="Twitter"><a href="https://twitter.com/nhsengland">@nhsengland</a></li>
    </ul>
    <p class="hee-card__address" aria-label="Bio">Health Education England<br> 3 Piccadilly<br> Manchester<br> M1 3BN</p>
    <p class="hee-card__bio" aria-label="Bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque ac pellentesque in sapien. Amet in ante libero a lobortis. Blandit sed pulvinar ultrices gravida vulputate at. Ipsum dolor condimentum habitasse aliquam risus risus consectetur.</p>
    <p class="hee-card__authorurl" aria-label="Author URL"><a href="/author/jo-blogs">View more about Mr First Last</a></p>
  </div>
```

#### Nunjucks macro

```
{{ authorCard({
    imgURL: "/images/doctor-headshot.png",
    title: "Mr",
    name: "First Last",
    initials: "JB",
    pronouns: "Pronoun",
    jobTitle: "Job title",
    department: "Department",
    organisation: "Organisation",
    email: "jo.bloggs@hee.co.uk",
    website: "http://nhs.uk/",
    twitter: "nhsengland",
    linkedin: "nhs",
    address: "Health Education England<br>
              3 Piccadilly<br>
              Manchester<br>
              M1 3BN",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque ac pellentesque in sapien. Amet in ante libero a lobortis. Blandit sed pulvinar ultrices gravida vulputate at. Ipsum dolor condimentum habitasse aliquam risus risus consectetur.",
    authorURL: "/author/jo-blogs"
}) }}
```

### Multiple authors

#### Container markup + nunjucks macro

```
<div class="hee-card--author__container">
    {{ authorCard({
        imgURL: "/images/doctor-headshot.png",
        title: "Mr",
        name: "First Author",
        initials: "JB",
        pronouns: "Pronoun",
        jobTitle: "Job title",
        department: "Department",
        organisation: "Organisation",
        email: "jo.bloggs@hee.co.uk",
        website: "http://nhs.uk/",
        twitter: "nhsengland",
        linkedin: "nhs",
        address: "Health Education England<br>
                  3 Piccadilly<br>
                  Manchester<br>
                  M1 3BN",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque ac pellentesque in sapien. Amet in ante libero a lobortis. Blandit sed pulvinar ultrices gravida vulputate at. Ipsum dolor condimentum habitasse aliquam risus risus consectetur.",
        authorURL: "/author/jo-blogs"
    }) }}
    
    {{ authorCard({
        imgURL: "/images/doctor-headshot.png",
        title: "Mr",
        name: "Second Author",
        initials: "JB",
        pronouns: "Pronoun",
        jobTitle: "Job title",
        department: "Department",
        organisation: "Organisation",
        email: "jo.bloggs@hee.co.uk",
        website: "http://nhs.uk/",
        twitter: "nhsengland",
        linkedin: "nhs",
        address: "Health Education England<br>
                  3 Piccadilly<br>
                  Manchester<br>
                  M1 3BN",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque ac pellentesque in sapien. Amet in ante libero a lobortis. Blandit sed pulvinar ultrices gravida vulputate at. Ipsum dolor condimentum habitasse aliquam risus risus consectetur.",
        authorURL: "/author/jo-blogs"
    }) }}
    
    {{ authorCard({
        imgURL: "/images/doctor-headshot.png",
        title: "Mr",
        name: "Third Author",
        initials: "JB",
        pronouns: "Pronoun",
        jobTitle: "Job title",
        department: "Department",
        organisation: "Organisation",
        email: "jo.bloggs@hee.co.uk",
        website: "http://nhs.uk/",
        twitter: "nhsengland",
        linkedin: "nhs",
        address: "Health Education England<br>
                  3 Piccadilly<br>
                  Manchester<br>
                  M1 3BN",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque ac pellentesque in sapien. Amet in ante libero a lobortis. Blandit sed pulvinar ultrices gravida vulputate at. Ipsum dolor condimentum habitasse aliquam risus risus consectetur.",
        authorURL: "/author/jo-blogs"
    }) }}    
</div>
```

---

### Nunjucks arguments

The author card Nunjucks macro takes the following arguments:

| Name         | Type     | Required  | Description                     |
|--------------|----------|-----------|---------------------------------|
 | imgURL       | string   | No        | URL for author headshot image   |
 | title        | string   | Yes       | Mr, Mrs, Miss, Ms, Mx, Sir etc. |
 | name         | string   | Yes       | Full name                       |
 | initials     | string   | No        | Initials                        |
 | pronouns     | string   | No        | Pronouns - he/him etc.          |
 | jobTitle     | string   | No        | Job title                       |
| department   | string   | No        | Department                      |
| organisation | string   | No        | Organisation                    |
| email        | string   | No        | Email address                   |
| website      | string   | No        | Website address                 |
| twitter      | string   | No        | Twitter handle                  |
| linkedin     | string   | No        | Linkedin handle                 |
| address      | string   | No        | Full address (supports HTML)    |
| bio          | string   | No        | Author bio text                 |
| authorURL    | string   | No        | URL to author bio page          |
    