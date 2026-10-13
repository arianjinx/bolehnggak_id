# BolehNggak.id

> [!NOTE]
> This repository is archived. The project ended in 2020, the `bolehnggak.id` domain has expired, and the code no longer builds. A static copy of the site still runs at [bolehnggak-id.netlify.app](https://bolehnggak-id.netlify.app).

<p align="center">
  <a href="https://bolehnggak-id.netlify.app">
    <img alt="BolehNggak.id preview" src="./src/images/bolehnggak_id-og.jpg" width="600" />
  </a>
</p>

BolehNggak.id ("allowed or not?") answered one question for people in Indonesia during the 2020 COVID-19 Large-Scale Social Restrictions (PSBB). Can I do this activity right now? You picked an everyday activity, such as going to the mall or a nearby park. The site told you whether the PSBB rules allowed it, allowed it with conditions, or banned it, and linked the regulation behind the answer. Share buttons let you pass the answer on.

A group of friends started the site in March 2020. For its first three months it had about 4,000 visitors a day. The team stopped maintaining it in the fourth month.

The project is an Indonesian version of [canigo.sg](https://canigo.sg), built with permission from its developers.

## Why it existed

The PSBB rules lived in long legal documents and dense infographics. The central government, the provinces, and the ministries each published their own instructions, and these did not always agree. None of them covered every everyday activity. Most people looked the rules up only when they had a specific plan, and finding the one rule that applied took too long. Many people kept doing activities without knowing the rules banned them. BolehNggak.id answered the question for one activity at a time, in casual Indonesian.

## How it worked

- A public [Google Sheet](https://docs.google.com/spreadsheets/d/16skDPETqaL8RXGsfhDtWsNLLtOabbE76Tfw_IzmR0Bg/edit?usp=sharing) held every answer. Visitors suggested activities in the sheet. The team reviewed each suggestion, wrote the answer, added a source, and marked the row as published.
- At build time, `gatsby-source-google-sheets` read the `CROWDSOURCE` worksheet. `gatsby-node.js` created one static page for each published row, at the row's slug.
- Each answer had one of three types: `can`, `can-but`, or `can-not`. The answer page shows them in green, amber, and red.
- If no regulation covered an activity directly, the answer showed a disclaimer. The disclaimer said that the answer came from the team's reading of the PSBB regulation, and linked Jakarta's Pergub DKI Jakarta No. 33/2020.
- Netlify hosted the static build.

The stack is Gatsby 2, React 16, Emotion with twin.macro and Tailwind CSS, and Google Sheets as the content source.

## What the team learned

These points come from Lintang Gustika's article, linked under Further reading.

- Regulations changed often, and central and regional rules were not always in sync. The team rewrote answers many times to keep the citations current.
- The rules had no fixed penalties, which weakened the reason to look them up.
- About 60 to 70 percent of working people in Indonesia are informal workers. Many had to go out every day to earn a living, whatever the rules said.
- The team had no clear way to keep answers current, and out-of-date answers would add to the confusion. So the team stopped maintaining the site.

## Why it no longer builds

The dependencies date from 2020, and changes to the Google Sheets API broke the source plugin. A build also needs a Google service account credential, read from `GOOGLE_SERVICE_CREDENTIALS` in production and from `google-service-credential.json` in development. The code stays here as a record of the project. Nobody maintains it.

## Further reading

- [What I Learned from BolehNggakId](https://www.linkedin.com/pulse/what-i-learned-from-bolehnggakid-interactive-center-social-gustika/) by Lintang Gustika, January 2021. It covers what worked, what didn't, and why the team stopped.
- [XDS Lab's Instagram post](https://www.instagram.com/p/B_2IrTQlw8m/?img_index=1) featuring the project.

## Team

Wahyu Dwi Widharto, Arian Pradana, Aswin Prasetyo, Rose Kusuma Diah Tantri, Lintang Gustika, and Rara built and ran BolehNggak.id. Thank you to everyone in Indonesia who used the site and suggested activities.

## License

MIT. See [LICENSE.md](LICENSE.md).

## Contact

The repository is archived, so you can't open issues. For questions about the project, email [arian.raptor@gmail.com](mailto:arian.raptor@gmail.com).
