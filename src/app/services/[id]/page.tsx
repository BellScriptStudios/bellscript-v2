import type { Metadata } from "next";
import ServiceDetail from "src/Components/ServiceDetail";
import { getServiceById } from "src/app/Data/services";
import { notFound } from "next/navigation";
import Header from "src/Components/Header";
import Footer from "src/Components/Footer";

type RouteParams = { id: string };

type PageProps = {
  params: Promise<RouteParams>;
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bellscript.studio";

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service || service.active === false) {
    return {
      title: "Service not found | BellScript Studios",
      description: "This service is no longer available.",
    };
  }

  const { title, long, blurb, priceFrom } = service;

  const rawDesc = (long || blurb || "").replace(/\s+/g, " ").trim();
  const description =
    rawDesc.length > 155
      ? `${rawDesc.slice(0, 152)}...`
      : rawDesc || "Custom websites and digital builds by BellScript Studios.";

  const canonicalUrl = `${SITE_URL}/services/${id}`;
  const pageTitle = `${title} | BellScript Studios`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonicalUrl,
      siteName: "BellScript Studios",
      images: [
        {
          url: "https://bellscript.studio/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "BellScript Studios — Version One",
        },
    ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
    other: {
      "data-bellscript-service": id,
      ...(priceFrom ? { "data-bellscript-priceFrom": priceFrom } : {}),
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service || service.active === false) {
    notFound();
  }

  return (
    <>
      <Header />
      <ServiceDetail service={service} />
      <Footer />
    </>
  );
}