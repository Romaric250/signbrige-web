'use client'

import React, { useState } from 'react'
import { Mic, MicOff, Send, History, Settings, Download, Share2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Select from '@/components/ui/Select'
import { SIGN_LANGUAGES } from '@/lib/constants'

const TranslatePage: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [inputText, setInputText] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('asl')
  const [translationHistory, setTranslationHistory] = useState([
    { id: 1, input: 'Hello, how are you?', output: '👋', language: 'asl', timestamp: '2 hours ago' },
    { id: 2, input: 'Thank you very much', output: '🙏', language: 'asl', timestamp: '1 day ago' },
  ])

  const handleStartRecording = () => {
    setIsRecording(true)
    // TODO: Implement speech recognition
  }

  const handleStopRecording = () => {
    setIsRecording(false)
    // TODO: Stop recording and process
  }

  const handleTranslate = () => {
    if (!inputText.trim()) return
    // TODO: Call translation API
    const newTranslation = {
      id: Date.now(),
      input: inputText,
      output: '👋', // Mock output
      language: selectedLanguage,
      timestamp: 'Just now',
    }
    setTranslationHistory([newTranslation, ...translationHistory])
    setInputText('')
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Real-Time Translation</h1>
        <p className="text-gray-600">Translate speech or text into sign language instantly.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Translation Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Input Section */}
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4">
                <Select
                  label="Sign Language"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  options={SIGN_LANGUAGES}
                />
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter text or speak
                  </label>
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your message here or click the microphone to speak..."
                    className="w-full h-32 rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant={isRecording ? 'secondary' : 'primary'}
                    size="lg"
                    onClick={isRecording ? handleStopRecording : handleStartRecording}
                    className="flex-1"
                  >
                    {isRecording ? (
                      <>
                        <MicOff className="mr-2 h-5 w-5" />
                        Stop Recording
                      </>
                    ) : (
                      <>
                        <Mic className="mr-2 h-5 w-5" />
                        Start Recording
                      </>
                    )}
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleTranslate}
                    disabled={!inputText.trim()}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Translate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Avatar Display */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">3D Avatar</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-6xl">👋</span>
                  </div>
                  <p className="text-gray-600 font-medium">Avatar Preview</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {inputText || 'Enter text or speak to see translation'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Translation History */}
        <div>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">History</h2>
                <Button variant="ghost" size="sm">
                  <History className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {translationHistory.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <p className="text-sm font-medium text-gray-900 mb-1">{item.input}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{item.output}</span>
                      <span className="text-xs text-gray-500">{item.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default TranslatePage

