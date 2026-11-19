"use client";

import React, { useState } from "react";
import { Check, Copy, Heart, X } from "lucide-react";
import { weddingConfig } from "@/config/wedding";

export function GiftModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [copiedAcc, setCopiedAcc] = useState<string | null>(null);

  if (!open) return null;

  const copyNumber = async (accountNumber: string) => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopiedAcc(accountNumber);
      setTimeout(() => setCopiedAcc(null), 2000);
    } catch {
      // ignore clipboard errors
    }
  };

  const accounts = [weddingConfig.gift.brideBank, weddingConfig.gift.groomBank];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Hộp Quà Mừng Cưới"
    >
      <div
        className="relative w-full max-w-[390px] overflow-hidden rounded-2xl bg-[#FAF8F3] shadow-2xl ring-1 ring-[#DFD4BF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative border-b border-[#E6DCC8] bg-[#F3EDE0] px-6 py-5 text-center">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3.5 top-3.5 flex h-8 w-8 items-center justify-center rounded-full text-[#523E2B] transition hover:bg-[#E6DCC8]"
            aria-label="Đóng"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#B5945B]/18 text-[#96743D]">
            <Heart className="h-5 w-5 fill-[#B5945B]/30" />
          </div>
          <h3 className="font-serif-editorial text-lg font-semibold text-[#523E2B]">
            Hộp Quà Mừng Cưới
          </h3>
          <p className="mt-1 text-xs text-[#756350]">
            Cảm ơn tình cảm và lời chúc phúc của Quý vị dành cho hai vợ chồng
          </p>
        </div>

        {/* Accounts */}
        <div className="space-y-3.5 p-5">
          {accounts.map((acc) => {
            const isCopied = copiedAcc === acc.accountNumber;
            return (
              <div
                key={acc.role}
                className="rounded-xl border border-[#E6DCC8] bg-white p-4 shadow-[0_2px_10px_rgba(82,62,43,0.05)]"
              >
                <p className="font-serif-editorial text-xs font-bold uppercase tracking-wider text-[#96743D]">
                  {acc.role}
                </p>
                <div className="mt-2 space-y-1 text-xs text-[#523E2B]">
                  <p>
                    Ngân hàng: <span className="font-semibold">{acc.bankName}</span>
                  </p>
                  <p>
                    Chủ TK: <span className="font-semibold">{acc.accountName}</span>
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <p className="font-mono text-sm font-bold tracking-wider text-[#3D2E1F]">
                      {acc.accountNumber}
                    </p>
                    <button
                      type="button"
                      onClick={() => copyNumber(acc.accountNumber)}
                      className="inline-flex items-center gap-1 rounded-full bg-[#E6DCC8] px-3 py-1 text-[11px] font-semibold text-[#523E2B] transition hover:bg-[#96743D] hover:text-white"
                    >
                      {isCopied ? (
                        <>
                          <Check className="h-3 w-3" />
                          <span>Đã chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
