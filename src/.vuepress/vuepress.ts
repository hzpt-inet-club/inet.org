export function defineUserConfig(p: {
  plugins: ((string | { components: { contributors: any; businessCard: any } })[] | (string | {
    locales: {
      "/": {
        translations: {
          button: { buttonText: string; buttonAriaLabel: string };
          modal: {
            footer: { selectText: string; closeText: string; navigateText: string; searchByText: string };
            noResultsScreen: {
              openIssueLinkText: string;
              noResultsText: string;
              suggestedQueryText: string;
              openIssueText: string
            };
            startScreen: {
              favoriteSearchesTitle: string;
              recentSearchesTitle: string;
              removeRecentSearchButtonTitle: string;
              saveRecentSearchButtonTitle: string;
              removeFavoriteSearchButtonTitle: string;
              noRecentSearchesText: string
            };
            searchBox: {
              resetButtonAriaLabel: string;
              resetButtonTitle: string;
              cancelButtonAriaLabel: string;
              cancelButtonText: string
            };
            errorScreen: { helpText: string; titleText: string }
          }
        };
        placeholder: string
      }
    };
    apiKey: string;
    indexName: string;
    searchParameters: { facetFilters: string[] }
  })[])[]; description: string; theme: string; themeConfig: {
    lastUpdated: boolean;
    navbar: ({ link: string; text: string } | { link: string; text: string } | { link: string; text: string } | {
      link: string;
      text: string
    } | { link: string; text: string } | { link: string; text: string } | {
      children: ({ link: string; text: string } | { link: string; text: string } | { link: string; text: string } | {
        link: string;
        text: string
      } | { link: string; text: string })[];
      text: string
    } | { link: string; text: string } | { link: string; text: string })[];
    sidebar: {
      "/blog/": ({ link: string; text: string } | { link: string; text: string } | { link: string; text: string } | {
        link: string;
        text: string
      } | { link: string; text: string } | { link: string; text: string } | { link: string; text: string } | {
        children: ({ link: string; text: string } | { link: string; text: string } | { link: string; text: string } | {
          link: string;
          text: string
        } | { link: string; text: string } | { link: string; text: string } | { link: string; text: string } | {
          link: string;
          text: string
        } | { link: string; text: string } | { link: string; text: string } | { link: string; text: string } | {
          link: string;
          text: string
        } | { link: string; text: string } | { link: string; text: string } | { link: string; text: string } | {
          link: string;
          text: string
        } | { link: string; text: string } | { link: string; text: string } | { link: string; text: string } | {
          link: string;
          text: string
        } | { link: string; text: string } | { link: string; text: string } | { link: string; text: string })[];
        text: string;
        collapsible: boolean
      })[];
      "/team/": ({ link: string; text: string } | { link: string; text: string } | { link: string; text: string } | {
        link: string;
        text: string
      } | { link: string; text: string })[];
      "/activity/": ({ link: string; text: string } | { link: string; text: string } | {
        link: string;
        text: string
      } | { link: string; text: string })[]
    };
    logo: string;
    contributors: boolean;
    editLink: boolean
  }; lang: string; title: string; base: string
}) {

}

export class DefaultThemeOptions {
}
