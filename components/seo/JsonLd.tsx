import { SITE_URL } from '@/lib/seo'
import { COMPANY } from '@/lib/constants'

/**
 * JSON-LD structured data for Organization and WebSite
 * Helps search engines understand the site and enables rich snippets
 */
export function JsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    description: COMPANY.tagline,
    url: SITE_URL,
    logo: COMPANY.logoUrl,
    sameAs: [
      'https://twitter.com/signbridge',
      'https://linkedin.com/company/signbridge',
      'https://github.com/signbridge',
    ],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY.name,
    description: COMPANY.tagline,
    url: SITE_URL,
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
      logo: {
        '@type': 'ImageObject',
        url: COMPANY.logoUrl,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const softwareApplication = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: COMPANY.product,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description: COMPANY.productDescription,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }}
      />
    </>
  )
}
