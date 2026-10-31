'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderProps } from '@/types/templates.types';
import { FaArrowRight, FaBars, FaCalendarAlt, FaHeart, FaPhoneAlt, FaTimes } from 'react-icons/fa';

export const Header = ({ data }: HeaderProps) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileMenuOpen]);

  if (!data) return null;

  const navLinks = [...(data.navLinksLeft || []), ...(data.navLinksRight || [])];
  const isActive = (url: string) => {
    if (url === '/') return pathname === '/';
    if (url.startsWith('/#')) return pathname === '/';
    return pathname === url || pathname.startsWith(`${url}/`);
  };
  const appointmentButton = (
    <>
      <FaCalendarAlt className="shrink-0 text-sm" />
      <span>{data.contactButton.text}</span>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-white-50)] text-sm">
        <FaArrowRight />
      </span>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-header-border)] bg-[var(--color-white)] px-4 sm:px-6 xl:px-5">
      <div className="mx-auto flex h-[72px] w-full max-w-[1380px] items-center justify-between lg:h-[82px] xl:h-[90px]">
        {/* Mobile Logo */}
        <Link href={data.logoUrl} aria-label={data.logoAlt} className="flex shrink-0 items-center xl:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.logo}
            alt={data.logoAlt}
            width={160}
            height={55}
            className="h-auto w-[145px] object-contain sm:w-[165px]"
          />
        </Link>

        {/* Desktop Layout: Left Menu - Centered Logo - Right Menu + CTA */}
        <div className="hidden w-full items-center justify-between xl:flex">
          {/* Left Navigation */}
          <nav aria-label="Left navigation" className="flex items-center gap-1">
            {(data.navLinksLeft || []).map((link) => {
              const active = isActive(link.url);
              return (
                <Link
                  key={link.id}
                  href={link.url}
                  aria-current={active ? 'page' : undefined}
                  className={`whitespace-nowrap rounded-full px-3 py-2.5 text-sm font-semibold transition-colors 2xl:px-4 ${
                    active
                      ? 'bg-[var(--color-surface-active)] text-[var(--color-primary)]'
                      : 'text-[var(--color-navigation)] hover:bg-[var(--color-surface-active)] hover:text-[var(--color-primary)]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Centered Logo */}
          <Link href={data.logoUrl} aria-label={data.logoAlt} className="flex shrink-0 items-center px-4">
            <img src={data.logo} alt={data.logoAlt} className="h-auto w-[160px] object-contain 2xl:w-[175px]" />
          </Link>

          {/* Right Navigation & CTA Button */}
          <div className="flex items-center gap-2 2xl:gap-3">
            <nav aria-label="Right navigation" className="flex items-center gap-1">
              {(data.navLinksRight || []).map((link) => {
                const active = isActive(link.url);
                return (
                  <Link
                    key={link.id}
                    href={link.url}
                    aria-current={active ? 'page' : undefined}
                    className={`whitespace-nowrap rounded-full px-3 py-2.5 text-sm font-semibold transition-colors 2xl:px-4 ${
                      active
                        ? 'bg-[var(--color-surface-active)] text-[var(--color-primary)]'
                        : 'text-[var(--color-navigation)] hover:bg-[var(--color-surface-active)] hover:text-[var(--color-primary)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <Link
              href={data.contactButton.url}
              className="ml-2 flex h-11 shrink-0 items-center gap-2 rounded-full bg-[var(--color-primary-button)] pl-4 pr-2 text-xs font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-accent-light)] 2xl:gap-2.5 2xl:pl-5 2xl:text-sm"
            >
              <FaCalendarAlt className="shrink-0 text-sm" />
              <span>{data.contactButton.text}</span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? data.closeMenuLabel : data.openMenuLabel}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-white)] text-xl text-[var(--color-primary)] shadow-sm transition-colors hover:bg-[var(--color-surface-active)] xl:hidden"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full flex max-h-[calc(100vh-4.5rem)] flex-col overflow-y-auto rounded-b-2xl border border-t-0 border-[var(--color-border)] bg-[var(--color-white)] p-4 shadow-[var(--shadow-mobile-menu)] xl:hidden">
          <Link href={data.logoUrl} aria-label={data.logoAlt} className="mb-3 flex justify-center">
            <img src={data.logo} alt={data.logoAlt} className="h-auto w-[170px] object-contain" />
          </Link>
          {navLinks.map((link) => {
            const active = isActive(link.url);
            return (
              <Link
                key={link.id}
                href={link.url}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={active ? 'page' : undefined}
                className={`rounded-full px-4 py-3.5 text-base font-semibold transition-colors ${active ? 'bg-[var(--color-surface-active)] text-[var(--color-primary)]' : 'text-[var(--color-navigation)] hover:bg-[var(--color-surface-active)] hover:text-[var(--color-primary)]'}`}
              >
                {link.label}
              </Link>
            );
          })}
          <a href={data.phoneUrl} className="mt-3 flex items-center gap-3 px-4 py-2 text-[var(--color-primary)]">
            <FaPhoneAlt />
            <span className="flex flex-col">
              <span className="text-sm font-bold">{data.phoneNumber}</span>
              <span className="text-xs text-[var(--color-caption)]">{data.phoneCaption}</span>
            </span>
          </a>
          <Link href={data.contactButton.url} onClick={() => setMobileMenuOpen(false)} className="mt-3 flex h-12 items-center justify-center gap-3 rounded-full bg-[var(--color-primary-button)] px-4 text-sm font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-accent-light)]">
            {appointmentButton}
          </Link>
        </div>
      )}
    </header>
  );
};
