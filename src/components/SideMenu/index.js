import React, { useState } from "react";
import {
  Container,
  MailActions,
  WriteMail,
  WriteButton,
  MailBoxes,
  MeetBoxes,
  ChatBox,
  MainChat,
  Avatar,
  StatusCircle,
  RecentChats,
  MainBoxIcon,
  StarIcon,
  ClockIcon,
  FlagIcon,
  SentIcon,
  SheetIcon,
  ArrowIcon,
  CategoryIcon,
  GroupIcon,
  InfoIcon,
  ChatIcon,
  MarketIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  HangoutsIcon,
  TimedSendIcon,
  MailIcon,
  WarningIcon,
  TrashIcon,
  CogIcon,
  PlusIcon,
  VideoIcon,
  KeyboardIcon,
} from "./styles";
import { MdPerson } from "react-icons/md";

export default function SideMenu() {
  const [categories, setCategories] = useState(false);
  const [showMore, setShowMore] = useState(false);
  return (
    <Container>
      <MailActions>
        <WriteMail>
          <WriteButton>
            <PlusIcon style={{ width: 48, height: 48 }} />
            Escrever
          </WriteButton>
        </WriteMail>
        <MailBoxes>
          <ul>
            <li className="active">
              <MainBoxIcon />
              <span>Caixa de Entrada</span>
              <span>4.852</span>
            </li>
            <li>
              <StarIcon />
              <span>Com estrela</span>
            </li>
            <li>
              <ClockIcon />
              <span>Adiados</span>
            </li>
            <li>
              <FlagIcon />
              <span>Importante</span>
            </li>
            <li>
              <SentIcon />
              <span>Enviados</span>
            </li>
            <li>
              <SheetIcon />
              <span>
                <strong>Rascunhos</strong>
              </span>
            </li>

            {!showMore && (
              <>
                {" "}
                <li onClick={() => setShowMore(true)}>
                  <ArrowDownIcon />
                  <span>Mais</span>
                </li>
              </>
            )}
            {showMore && (
              <>
                <li onClick={() => setShowMore(false)}>
                  <ArrowUpIcon />
                  <span>Menos</span>
                </li>
                <li onClick={() => setCategories(!categories)} id="categories">
                  <ArrowIcon />
                  <CategoryIcon />
                  <span>Categorias</span>
                </li>
                {categories && (
                  <ul>
                    <li>
                      <GroupIcon />
                      <span>Social</span>
                      <span>1.708</span>
                    </li>
                    <li>
                      <InfoIcon />
                      <span>Atualizações</span>
                      <span>4.017</span>
                    </li>
                    <li>
                      <ChatIcon />
                      <span>Fóruns</span>
                      <span>4</span>
                    </li>
                    <li>
                      <MarketIcon />
                      <span>Promoções</span>
                      <span>3.199</span>
                    </li>
                  </ul>
                )}

                <li>
                  <CategoryIcon />
                  <span>Notes</span>
                </li>
                <li>
                  <CategoryIcon />
                  <span>Pessoal</span>
                </li>

                <li>
                  <HangoutsIcon />
                  <span>Chats</span>
                </li>
                <li>
                  <TimedSendIcon />
                  <span>Programados</span>
                </li>
                <li>
                  <MailIcon />
                  <span>Todos os e-mails</span>
                </li>
                <li>
                  <WarningIcon />
                  <span>
                    <strong>Spam</strong>
                  </span>
                  <span>25</span>
                </li>
                <li>
                  <TrashIcon />
                  <span>Lixeira</span>
                </li>
                <li>
                  <CategoryIcon />
                  <span>Recibos</span>
                </li>
                <li>
                  <CategoryIcon />
                  <span>Trabalho</span>
                </li>
                <li>
                  <CogIcon />
                  <span>Gerenciar marcadores</span>
                </li>
                <li>
                  <PlusIcon />
                  <span>Criar novo marcador</span>
                </li>
              </>
            )}
          </ul>
        </MailBoxes>
        <MeetBoxes>
          <span>Meet</span>
          <ul>
            <li>
              <VideoIcon />
              <span>Iniciar uma Reunião</span>
            </li>
            <li>
              <KeyboardIcon />
              <span>Participar de Reunião</span>
            </li>
          </ul>
        </MeetBoxes>
        <ChatBox>
          <MainChat>
            <span>Chat</span>
            <ul>
              <li>
                <Avatar>
                  <MdPerson />
                  <StatusCircle />
                </Avatar>
                <span>Breno</span>
                <ArrowIcon />
                <PlusIcon />
              </li>
            </ul>
          </MainChat>
          <RecentChats>
            <span>Nenhum bate-papo recente</span>
            <span>Iniciar um novo</span>
          </RecentChats>
        </ChatBox>
      </MailActions>
    </Container>
  );
}
