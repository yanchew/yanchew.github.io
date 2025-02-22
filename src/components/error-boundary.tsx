"use client"

import * as React from "react"
import Link from "next/link"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="max-w-md p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Etwas ist schief gelaufen</h2>
            <p className="text-muted-foreground mb-6">
              Es tut uns leid, aber es ist ein Fehler aufgetreten. Unser Team wurde benachrichtigt.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      )
    }

    return this.props.children
  }
} 